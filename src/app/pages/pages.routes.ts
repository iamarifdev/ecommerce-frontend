import { Route } from '@angular/router';

export const pagesRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './welcome/welcome.module#WelcomeModule'
  },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule'
  }
];
