import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IProductListItem } from '../models';
import { DEFAULT_PRODUCT_URL } from '../../../shared/constants';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  defaultProductUrl = DEFAULT_PRODUCT_URL;
  @Input() productItem: IProductListItem;
  @Output() addedToCart: EventEmitter<IProductListItem> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  addProductToWishList() {
    console.log('added');
  }

  addProductToCart() {
    // will show a popup to add to cart
    // not directly show the cart
    // const cartProduct: ICartProduct = {
    //   id: this.product.id,
    //   title: this.product.title,
    //   // demo
    //   size: this.product.shippingDetail.sizes[0] || null,
    //   unit: 1,
    //   unitPrice: this.product.pricing.price,
    //   totalPrice: this.product.pricing.price,
    //   imageUrl: this.product.featureImageUrl
    // };
    this.addedToCart.emit(this.productItem);
  }
}
