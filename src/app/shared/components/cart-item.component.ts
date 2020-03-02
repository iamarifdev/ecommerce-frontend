import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { DEFAULT_PRODUCT_URL } from './../constants/index';
import { ICartProduct } from '../../pages/orders/carts/models/cart.model';
import { CartsService } from '../../pages/orders/carts/carts.service';

@Component({
  selector: 'cart-item',
  template: `
    <div class="flex flex-row vertical-center cart-item">
      <div class="flex flex-column">
        <img class="product-image" [src]="cartProduct?.featureImageUrl || defaultProductUrl" alt="Product Image" />
      </div>
      <div class="flex cell flex-column product-details">
        <div class="flex flex-row space-between">
          <div class="flex flex-column product-description">
            <p>{{ cartProduct?.title }}</p>
            <div class="flex flex-row vertical-center">
              Color:
              <div [style.background-color]="cartProduct?.color"></div>
            </div>
            <p>Size: {{ cartProduct.size }}</p>
          </div>
          <div class="flex flex-column product-price">
            <p>Unit Price</p>
            <p>TK. {{ cartProduct?.unitPrice }}</p>
            <item-counter (count)="onUpdateCount($event)"></item-counter>
          </div>
          <div class="flex flex-column product-price">
            <p>Total Price</p>
            <p>TK. {{ cartProduct.totalPrice }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .cart-item {
        background-color: white;
        padding: 0 15px;
        height: 120px;
        margin-bottom: 10px;
      }
      .product-details {
        margin-left: 15px;
      }
      .product-image {
        width: auto;
        height: 120px;
      }
      .product-description p,
      .product-description div,
      .product-price p {
        margin: 0;
        padding: 2px;
        font-size: 12px;
        font-weight: 700;
      }
      .product-description div div {
        padding: 8px;
        margin-left: 5px;
      }
      .product-description p:nth-child(1) {
        font-size: 14px;
      }
      .product-price p:nth-child(2) {
        font-size: 14px;
      }
    `
  ]
})
export class CartItemComponent implements OnInit {
  @Input() defaultProductUrl = DEFAULT_PRODUCT_URL;
  @Input() cartProduct: ICartProduct;
  @Output() updateCartProduct: EventEmitter<ICartProduct> = new EventEmitter();

  constructor(private cartsService: CartsService) {}

  ngOnInit(): void {
    if (this.cartProduct) {
      this.calculatePrice();
    }
  }

  onUpdateCount(unit: number) {
    this.cartProduct.quantity = unit;
    this.calculatePrice();
    this.cartsService.updateProduct(this.cartProduct);
    this.updateCartProduct.emit(this.cartProduct);
  }

  private calculatePrice() {
    const { quantity, unitPrice } = this.cartProduct;
    this.cartProduct.totalPrice = quantity * unitPrice;
  }
}
