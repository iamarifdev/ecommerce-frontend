import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICartAddProduct, ICart, ICartUpdateProductQuantity } from './models';
import { ApiResponse } from '../../../../app/models';
import { ApiService } from '../../../shared/services/api.service';
import { AsyncService } from '../../../shared/services/async.service';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  private cartProductsSubject = new BehaviorSubject<ICart>({} as ICart);
  private isCartOpen = false;

  constructor(private apiService: ApiService, private asyncService: AsyncService) {}

  public get cartOpened() {
    return this.isCartOpen;
  }

  public toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  getCart() {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) return;
    const params = new HttpParams({ fromObject: { cartId } });
    this.asyncService.start();
    const subscription = this.apiService.get<ApiResponse<ICart>>('/carts/id', params).subscribe(
      response => {
        if (response.success && response.result) {
          this.cartProductsSubject.next(response.result);
        }
        this.asyncService.finish();
        subscription.unsubscribe();
      },
      error => {
        localStorage.removeItem('cartId');
        this.asyncService.finish();
        subscription.unsubscribe();
      }
    );
  }

  addProduct(product: ICartAddProduct) {
    const cartId = localStorage.getItem('cartId');
    if (cartId) {
      product.cartId = cartId;
    }
    this.asyncService.start();
    return this.apiService.post<ApiResponse<ICart>>('/carts/add/product', product).pipe(
      map(response => {
        if (response.success && response.result) {
          this.cartProductsSubject.next(response.result);
          localStorage.setItem('cartId', response.result.id);
        }
        this.toggleCart();
        this.asyncService.finish();
        return response;
      })
    );
  }

  updateCartProductQuantity(update: ICartUpdateProductQuantity) {
    const { cartId, cartProductId, productId, quantity } = update;
    if (cartId && productId && quantity) {
      this.asyncService.start();
      const subscription = this.apiService
        .patch<ApiResponse<ICart>>(`/carts/update/${cartId}/product-quantity`, { cartProductId, productId, quantity })
        .subscribe(response => {
          if (response.success && response.result) {
            this.cartProductsSubject.next(response.result);
            localStorage.setItem('cartId', response.result.id);
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
