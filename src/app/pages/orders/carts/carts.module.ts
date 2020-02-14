import { NgModule } from '@angular/core';

import { CartContainerComponent, CartItemCounterComponent } from './index';
import { SharedModule } from '../../../shared/shared.module';
import { CartItemComponent } from './cart-item.component';
import { CartService } from './carts.service';

@NgModule({
  imports: [SharedModule],
  declarations: [CartContainerComponent, CartItemComponent, CartItemCounterComponent],
  exports: [CartContainerComponent],
  providers: [CartService]
})
export class CartsModule {}
