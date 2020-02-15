import { Route } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';

export const productsRoutes: Route[] = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'list',
    component: ProductListComponent
  }
];
