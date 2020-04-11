import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { CartsModule } from '../pages/orders/carts/carts.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CartsModule,
    SharedModule
  ],
  declarations: [LayoutComponent, HeaderComponent]
})
export class LayoutModule { }
