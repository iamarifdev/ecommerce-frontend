import { Component, OnInit, Input } from '@angular/core';

import { IProductListItem, IProductColor, IProduct } from '../models';
import { DEFAULT_PRODUCT_URL } from '../../../shared/constants';
import { ProductsService } from '../products.service';
import { AsyncService } from '../../../shared/services/async.service';

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  @Input() title: string;
  @Input() productItem: IProductListItem;

  product: IProduct;

  defaultProductUrl = DEFAULT_PRODUCT_URL;
  selectedSize: number;
  selectedColor: IProductColor;

  constructor(private asyncService: AsyncService, private productService: ProductsService) {
    this.product = { ...this.productItem };
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.asyncService.start();
    this.productService.getProductById(this.productItem.id).subscribe(
      response => {
        if (response.success && response.result) {
          this.product = response.result;
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
