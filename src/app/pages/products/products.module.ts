import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductColorsComponent } from './product-colors.component';
import { productsRoutes } from './products.routes';
import { ProductsService } from './products.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [RouterModule.forChild(productsRoutes), SharedModule],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductColorsComponent,
    ProductItemComponent,
    ProductAddComponent
  ],
  entryComponents: [ProductAddComponent],
  providers: [ProductsService]
})
export class ProductsModule {}
