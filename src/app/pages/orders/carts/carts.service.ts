import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ApiService } from '../../../shared/services/api.service';
import { ICartProduct, ICart } from './models/cart.model';
import { ICartAddProduct } from './models';
import { ApiResponse } from 'src/app/models';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  private cartProductsSubject = new BehaviorSubject<ICart>({} as ICart);
  private isCartOpen = false;

  constructor(private apiService: ApiService) {}

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
    const subscription = this.apiService.get<ApiResponse<ICart>>('/carts/id', params).subscribe(response => {
      if (response.success && response.result) {
        this.cartProductsSubject.next(response.result);
      }
      subscription.unsubscribe();
    });
  }

  addProduct(product: ICartAddProduct) {
    if (product) {
      const subscription = this.apiService
        .post<ApiResponse<ICart>>('/carts/add/product', product)
        .subscribe(response => {
          if (response.success && response.result) {
            this.cartProductsSubject.next(response.result);
            localStorage.setItem('cartId', response.result.id);
          }
          subscription.unsubscribe();
        });

      // const products = this.cartProductsSubject.value;
      // this.cartProductsSubject.next(products.concat([cartProduct]));
    }
  }

  updateProduct(cartProduct: ICartProduct) {
    // if (cartProduct && cartProduct.id) {
    //   const products = [...this.cartProductsSubject.value];
    //   const index = products.findIndex(p => p.id === cartProduct.id);
    //   if (index > -1) {
    //     products[index] = cartProduct;
    //     this.cartProductsSubject.next(products);
    //   }
    // }
  }

  get cart(): Observable<ICart> {
    return this.cartProductsSubject.asObservable();
    // const cartData = products.pipe(
    //   map(items => {
    //     return items.reduce((aCart: ICart, item) => {
    //       aCart.id = aCart.id || Date.now().toString();
    //       aCart.quantity = aCart.quantity || 0;
    //       aCart.quantity += item.unit;
    //       aCart.products = aCart.products || [];
    //       aCart.products.push(item);
    //       aCart.status = aCart.status || 'active';
    //       aCart.total = aCart.total || 0;
    //       aCart.total += item.totalPrice;
    //       return aCart;
    //     }, {} as ICart);
    //   })
    // );
    // return cartData;
  }
}
