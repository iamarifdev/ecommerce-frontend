import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SharedModule } from '../../shared/shared.module';
import { productsRoutes } from './products.routes';
import { ProductsService } from './products.service';

@NgModule({
  imports: [RouterModule.forChild(productsRoutes), SharedModule],
  declarations: [ProductsComponent, ProductListComponent, ProductItemComponent],
  providers: [ProductsService]
})
export class ProductsModule {}
