import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

import { ICartProduct } from '../../orders/carts/models/cart.model';
import { ProductsService } from '../products.service';
import { CartsService } from '../../orders/carts/carts.service';
import { AsyncService } from '../../../shared/services/async.service';
import { IProductListItem } from '../models';
import { ProductAddComponent } from '../product-add/product-add.component';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  public productCount = 0;
  public productList: IProductListItem[] = [];

  public productListSub: Subscription;
  constructor(
    public asynService: AsyncService,
    private productsService: ProductsService,
    private cartsService: CartsService,
    private modalService: NzModalService
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

  onAddProductToCart(productItem: IProductListItem): void {
    // this.cartsService.addProduct(cartProduct);
    // this.cartsService.toggleCart();
    const modelRef = this.modalService.create({
      nzWrapClassName: 'vertical-center-modal',
      nzContent: ProductAddComponent,
      nzWidth: 750,
      nzComponentParams: {
        productItem
      },
      nzFooter: null
    });
  }

  ngOnDestroy(): void {
    if (this.productListSub) this.productListSub.unsubscribe();
  }
}
