import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { pagesRoutes } from './pages.routes';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { CartsModule } from './orders/carts/carts.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pagesRoutes),
    CartsModule,
    SharedModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
