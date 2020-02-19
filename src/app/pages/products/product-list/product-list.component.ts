import { Component, OnInit } from '@angular/core';

import { CartsService } from '../../orders/carts/carts.service';
import { ICartProduct } from '../../orders/carts/models/cart.model';
import { IProduct } from '../models/product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productCount = 0;
  public productList: IProduct[] = [];
  constructor(private productsService: ProductsService, private cartsService: CartsService) {}

  ngOnInit() {
    this.getPaginatedProducts();
  }

  getPaginatedProducts(): void {
    this.productsService.getPaginatedProducts().subscribe(
      response => {
        if (response.success && response.result) {
          this.productCount = response.result.count;
          this.productList = response.result.items;
        }
      },
      error => {
        this.productList = [];
      }
    );
  }

  onAddProductToCart(cartProduct: ICartProduct) {
    this.cartsService.addProduct(cartProduct);
    this.cartsService.toggleCart();
  }
}
