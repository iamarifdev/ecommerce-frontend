import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { CheckoutComponent } from './checkout.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Route[] = [
  {
    path: '',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [CheckoutComponent]
})
export class CheckoutModule { }
