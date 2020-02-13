import { PagesComponent } from './pages.component';
import { Route } from '@angular/router';

export const pagesRoutes: Route[] = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/home' },
      {
        path: 'home',
        loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
      }
    ]
  }
];
