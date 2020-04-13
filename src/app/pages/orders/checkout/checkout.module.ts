import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { CheckoutComponent } from './checkout.component';
import { ChooseShippingMethodComponent } from './choose-shipping-method/choose-shipping-method.component';
import { ChoosePaymentMethodComponent } from './choose-payment-method/choose-payment-method.component';
import { CheckoutService } from './checkout.service';
import { SharedModule } from '../../../shared/shared.module';

const routes: Route[] = [
  {
    path: '',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [CheckoutComponent, ChooseShippingMethodComponent, ChoosePaymentMethodComponent],
  providers: [CheckoutService]
})
export class CheckoutModule {}
