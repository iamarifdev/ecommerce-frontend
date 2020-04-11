import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CartContainerComponent } from './index';
import { SharedModule } from '../../../shared/shared.module';
import { CartItemComponent } from '../../../shared/components/cart-item.component';
import { CartsService } from './carts.service';

@NgModule({
  imports: [RouterModule, SharedModule],
  declarations: [CartContainerComponent, CartItemComponent],
  exports: [CartContainerComponent],
  providers: [CartsService]
})
export class CartsModule {}
