import { Component, OnInit, Input } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { NzModalRef } from 'ng-zorro-antd/modal';

import { IProductListItem, IProductColor, IProduct } from '../models';
import { DEFAULT_PRODUCT_URL } from '../../../shared/constants';
import { ProductsService } from '../products.service';
import { AsyncService } from '../../../shared/services/async.service';
import { CartsService } from '../../orders/carts/carts.service';
import { ICartAddProduct } from '../../orders/carts/models';

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  @Input() productItem: IProductListItem;

  public defaultProductUrl = DEFAULT_PRODUCT_URL;
  public selectedSize: number;
  public product: IProduct;
  public selectedColor: IProductColor;
  public quantity = 1;

  public modalRefs: NzModalRef<any, any>[];

  constructor(
    public asyncService: AsyncService,
    private productService: ProductsService,
    private cartsService: CartsService,
    private modal: NzModalService
  ) {
    this.modalRefs = this.modal.openModals;
  }

  get isValidInfo() {
    if (!this.selectedColor) return false;
    if (!this.selectedSize) return false;
    // check more fields
    return true;
  }

  ngOnInit(): void {
    this.product = { ...this.productItem };
    this.getProduct();
  }

  addToCart(): void {
    const productToAdd: ICartAddProduct = {
      color: this.selectedColor.colorCode,
      quantity: this.quantity,
      size: this.selectedSize,
      productId: this.product.id
      // todo add customer id if customer is logged in
    };
    // console.log('productToAdd', productToAdd);
    const subscription = this.cartsService.addProduct(productToAdd).subscribe(_ => {
      subscription.unsubscribe();
      this.modalRefs.forEach(f => f.close());
    });
  }

  onSelectColor(productColor: IProductColor) {
    if (productColor.sizes && productColor.sizes.length) {
      this.selectedSize = productColor.sizes[0];
    }
  }

  getProduct(): void {
    this.asyncService.start();
    this.productService.getProductById(this.productItem.id).subscribe(
      response => {
        if (response.success && response.result) {
          this.product = response.result;
          if (this.product.productColors && this.product.productColors.length) {
            this.selectedColor = this.product.productColors[0];
            this.onSelectColor(this.selectedColor);
          }
        }
        this.asyncService.finish();
      },
      error => {
        console.log(error);
        this.asyncService.finish();
      }
    );
  }
}
