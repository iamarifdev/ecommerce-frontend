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
  @Input() productItem: IProductListItem;

  public defaultProductUrl = DEFAULT_PRODUCT_URL;
  public selectedSize: number;
  public product: IProduct;
  public selectedColor: IProductColor;

  constructor(private asyncService: AsyncService, private productService: ProductsService) {}

  ngOnInit(): void {
    this.product = { ...this.productItem };
    this.getProduct();
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
