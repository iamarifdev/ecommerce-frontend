import { Component, OnInit } from '@angular/core';

import { IShippingMethod, IPaymentMethod } from './models';
import { UserService } from '../../user/user.service';
import { Customer } from '../../user/register/models';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  public selectedIndex = 0;
  public customer: Customer;

  public checkout = {
    shippingMethod: null,
    paymenthMethod: null
  };

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserDetails().subscribe(response => {
      if (response.success && response.result) {
        this.customer = response.result;
      }
    });
  }

  public onChooseShippingMethod(shippingMethod: IShippingMethod): void {
    this.checkout = { ...this.checkout, shippingMethod };
    console.log('this.checkout: ', this.checkout);
  }

  public onChoosePaymentMethod(paymenthMethod: IPaymentMethod): void {
    this.checkout = { ...this.checkout, paymenthMethod };
    console.log('this.checkout: ', this.checkout);
  }
}
