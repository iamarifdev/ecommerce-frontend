import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { PaymentsComponent } from './payments.component';
import { SuccessComponent } from './success/success.component';
import { FailedComponent } from './failed/failed.component';

const routes: Route[] = [
  {
    path: '',
    component: PaymentsComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'failed',
    component: FailedComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaymentsComponent, SuccessComponent, FailedComponent]
})
export class PaymentsModule { }
