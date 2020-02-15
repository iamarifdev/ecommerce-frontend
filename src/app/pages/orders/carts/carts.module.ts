import { NgModule } from '@angular/core';

import { CartContainerComponent, CartItemCounterComponent } from './index';
import { SharedModule } from '../../../shared/shared.module';
import { CartItemComponent } from './cart-item.component';
import { CartsService } from './carts.service';

@NgModule({
  imports: [SharedModule],
  declarations: [CartContainerComponent, CartItemComponent, CartItemCounterComponent],
  exports: [CartContainerComponent],
  providers: [CartsService]
})
export class CartsModule {}
