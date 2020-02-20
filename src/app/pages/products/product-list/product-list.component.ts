import { Component, OnInit, OnDestroy } from '@angular/core';

import { IProduct } from '../models/product.model';
import { ICartProduct } from '../../orders/carts/models/cart.model';
import { ProductsService } from '../products.service';
import { CartsService } from '../../orders/carts/carts.service';
import { AsyncService } from '../../../shared/services/async.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  public productCount = 0;
  public productList: IProduct[] = [];

  public productListSub: Subscription;
  constructor(
    public asynService: AsyncService,
    private productsService: ProductsService,
    private cartsService: CartsService
  ) {}

  ngOnInit() {
    this.getPaginatedProducts();
  }

  getPaginatedProducts(): void {
    this.asynService.start();
    this.productListSub = this.productsService.getPaginatedProducts().subscribe(
      response => {
        if (response.success && response.result) {
          this.productCount = response.result.count;
          this.productList = response.result.items;
        }
        this.asynService.finish();
      },
      error => {
        this.productList = [];
        this.asynService.finish();
      }
    );
  }

  onAddProductToCart(cartProduct: ICartProduct): void {
    this.cartsService.addProduct(cartProduct);
    this.cartsService.toggleCart();
  }

  ngOnDestroy(): void {
    if (this.productListSub) this.productListSub.unsubscribe();
  }
 }
