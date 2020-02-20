import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ICartProduct } from './models/cart.model';
import { CartsService } from './carts.service';

@Component({
  selector: 'cart-item',
  template: `
    <div class="flex flex-row vertical-center cart-item">
      <div class="flex flex-column">
        <img class="product-image" [src]="cartProduct?.imageUrl || defaultProductUrl" alt="Product Image" />
      </div>
      <div class="flex cell flex-column product-details">
        <div class="flex flex-row space-between">
          <div class="flex flex-column product-description">
            <p>{{ cartProduct?.title }}</p>
            <p>Color: {{ cartProduct?.color }}</p>
            <p>Size: {{ cartProduct.size }}</p>
          </div>
          <div class="flex flex-column product-price">
            <p>Unit Price</p>
            <p>TK. {{ cartProduct?.unitPrice }}</p>
            <cart-item-counter (count)="onUpdateCount($event)"></cart-item-counter>
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
      .product-price p {
        margin: 0;
        padding: 2px;
        font-size: 12px;
        font-weight: 700;
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
  @Input() defaultProductUrl = '/assets/images/products/default.jpg';
  @Input() cartProduct: ICartProduct;
  @Output() updateCartProduct: EventEmitter<ICartProduct> = new EventEmitter();

  constructor(private cartsService: CartsService) {}

  ngOnInit(): void {
    if (this.cartProduct) {
      this.calculatePrice();
    }
  }

  onUpdateCount(unit: number) {
    this.cartProduct.unit = unit;
    this.calculatePrice();
    this.cartsService.updateProduct(this.cartProduct);
    this.updateCartProduct.emit(this.cartProduct);
  }

  private calculatePrice() {
    const { unit, unitPrice } = this.cartProduct;
    this.cartProduct.totalPrice = unit * unitPrice;
  }
}
