import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICartProduct, ICart } from './models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  private cartProductsSubject = new BehaviorSubject<ICartProduct[]>([]);
  private isCartOpen = false;

  public get cartOpened() {
    return this.isCartOpen;
  }

  public toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  addProduct(cartProduct: ICartProduct) {
    if (cartProduct) {
      const products = this.cartProductsSubject.value;
      this.cartProductsSubject.next(products.concat([cartProduct]));
    }
  }

  updateProduct(cartProduct: ICartProduct) {
    if (cartProduct && cartProduct.id) {
      const products = [...this.cartProductsSubject.value];
      const index = products.findIndex(p => p.id === cartProduct.id);
      if (index > -1) {
        products[index] = cartProduct;
        this.cartProductsSubject.next(products);
      }
    }
  }

  get cart(): Observable<ICart> {
    const products = this.cartProductsSubject.asObservable();
    const cartData = products.pipe(
      map(items => {
        return items.reduce((aCart: ICart, item) => {
          aCart.id = aCart.id || Date.now().toString();
          aCart.quantity = aCart.quantity || 0;
          aCart.quantity += item.unit;
          aCart.products = aCart.products || [];
          aCart.products.push(item);
          aCart.status = aCart.status || 'active';
          aCart.total = aCart.total || 0;
          aCart.total += item.totalPrice;
          return aCart;
        }, {} as ICart);
      })
    );
    return cartData;
  }
}
