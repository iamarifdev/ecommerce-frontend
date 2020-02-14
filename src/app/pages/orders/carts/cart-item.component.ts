import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'cart-item',
  template: `
    <div class="flex flex-row vertical-center cart-item">
      <div class="flex flex-column">
        <img class="product-image" [src]="imagePath" alt="Product Image" />
      </div>
      <div class="flex cell flex-column product-details">
        <div class="flex flex-row space-between">
          <div class="flex flex-column product-description">
            <p>SPRINT Men's Sneaker</p>
            <p>Color: Oranage</p>
            <p>Size: 39</p>
          </div>
          <div class="flex flex-column product-price">
            <p>Unit Price</p>
            <p>TK. {{ unitPrice }}</p>
            <cart-item-counter (count)="onCount($event)"></cart-item-counter>
          </div>
          <div class="flex flex-column product-price">
            <p>Total Price</p>
            <p>TK. {{ totalPrice }}</p>
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
        font-size: 15px;
        font-weight: 700;
      }
      .product-description p:nth-child(1) {
        font-size: 20px;
      }
      .product-price p:nth-child(2) {
        font-size: 18px;
      }
    `
  ]
})
export class CartItemComponent implements OnInit {
  @Input() imagePath = '/assets/images/products/default.jpeg';
  @Input() unit = 1;
  @Input() unitPrice: number;
  @Output() updatePrice: EventEmitter<number> = new EventEmitter();

  public totalPrice = 0;

  ngOnInit(): void {
    this.calculatePrice(this.unit);
  }

  onCount(unit: number) {
    this.calculatePrice(unit);
  }

  calculatePrice(unit: number) {
    this.unit = unit;
    this.totalPrice = unit * this.unitPrice;
    this.updatePrice.emit(this.totalPrice);
  }
}
