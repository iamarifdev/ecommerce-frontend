import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { CreateAccountComponent } from './create-account/create-account.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../../../shared/shared.module';
import { BillingAddressComponent } from './billing-address/billing-address.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { RegisterService } from './register.service';

const routes: Route[] = [{ path: '', component: RegisterComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [RegisterComponent, CreateAccountComponent, BillingAddressComponent, ShippingAddressComponent],
  providers: [RegisterService]
})
export class RegisterModule {}
