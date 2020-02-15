import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICartProduct } from '../../orders/carts/models/cart.model';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  defaultProductUrl = '/assets/images/products/default.jpeg';
  @Input() product: any;
  @Output() addedToCart: EventEmitter<ICartProduct> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  addProductToWishList() {
    console.log('added');
  }

  addProductToCart() {
    const cartProduct: ICartProduct = {
      id: this.product.id,
      title: this.product.title,
      unit: 1,
      unitPrice: this.product.unitPrice,
      totalPrice: this.product.unitPrice,
      imageUrl: this.product.imageUrl
    };
    this.addedToCart.emit(cartProduct);
  }
}
