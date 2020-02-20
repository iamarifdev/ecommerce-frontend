import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICartProduct } from '../../orders/carts/models/cart.model';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  defaultProductUrl = '/assets/images/products/default.jpg';
  @Input() product: IProduct;
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
      // demo
      size: this.product.shippingDetail.sizes[0] || null,
      unit: 1,
      unitPrice: this.product.pricing.price,
      totalPrice: this.product.pricing.price,
      imageUrl: this.product.featureImageUrl
    };
    this.addedToCart.emit(cartProduct);
  }
}
