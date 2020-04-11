import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICartAddProduct, ICart, ICartUpdateProductQuantity } from './models';
import { ApiResponse, AuthUser } from '../../../../app/models';
import { UserService } from '../../user/user.service';
import { ApiService } from '../../../shared/services/api.service';
import { AsyncService } from '../../../shared/services/async.service';
import { StorageService } from '../../../shared/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  private cartProductsSubject = new BehaviorSubject<ICart>({} as ICart);
  private isCartOpen = false;
  private authUser: AuthUser;

  constructor(
    private apiService: ApiService,
    private asyncService: AsyncService,
    private storageService: StorageService,
    private userService: UserService
  ) {
    this.userService.authUser$.subscribe((authUser) => (this.authUser = authUser));
  }

  public get cartOpened() {
    return this.isCartOpen;
  }

  public toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  public getCart(): void {
    const params: any = {};
    if (this.authUser && this.authUser.userId) {
      params.customerId = this.authUser.userId;
    }
    const cartId = this.storageService.getCartId();
    if (cartId) {
      params.cartId = cartId;
    }
    if (!Object.keys(params).length) return;
    const queryParams = new HttpParams({ fromObject: params });
    this.asyncService.start();
    const subscription = this.apiService.get<ApiResponse<ICart>>('/carts/id', queryParams).subscribe(
      (response) => {
        if (response.success && response.result) {
          this.cartProductsSubject.next(response.result);
        }
        this.asyncService.finish();
        subscription.unsubscribe();
      },
      (error) => {
        this.storageService.removeCartId();
        this.asyncService.finish();
        subscription.unsubscribe();
      }
    );
  }

  public addProduct(product: ICartAddProduct): Observable<ApiResponse<ICart>> {
    const cartId = this.storageService.getCartId();
    if (cartId) {
      product.cartId = cartId;
    }
    this.asyncService.start();
    return this.apiService.post<ApiResponse<ICart>>('/carts/add/product', product).pipe(
      map((response) => {
        if (response.success && response.result) {
          this.cartProductsSubject.next(response.result);
          this.storageService.saveCartId(response.result.id);
        }
        this.toggleCart();
        this.asyncService.finish();
        return response;
      })
    );
  }

  public updateCartProductQuantity(update: ICartUpdateProductQuantity): void {
    const { cartId, cartProductId, productId, quantity } = update;
    if (cartId && productId && quantity) {
      this.asyncService.start();
      const subscription = this.apiService
        .patch<ApiResponse<ICart>>(`/carts/update/${cartId}/product-quantity`, { cartProductId, productId, quantity })
        .subscribe((response) => {
          if (response.success && response.result) {
            this.cartProductsSubject.next(response.result);
            this.storageService.saveCartId(response.result.id);
          }
          this.asyncService.finish();
          subscription.unsubscribe();
        });
    }
  }

  get cart(): Observable<ICart> {
    return this.cartProductsSubject.asObservable();
  }
}
