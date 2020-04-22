import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingAddressComponent } from './billing-address/billing-address.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [BillingAddressComponent, ShippingAddressComponent, CustomerAddressComponent],
  exports: [BillingAddressComponent, ShippingAddressComponent, CustomerAddressComponent]
})
export class ComponentsModule {}
