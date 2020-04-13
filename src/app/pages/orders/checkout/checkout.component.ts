import { Component, OnInit } from '@angular/core';

import { IShippingMethod, IPaymentMethod } from './models';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  public selectedIndex = 0;

  public checkout = {
    shippingMethod: null,
    paymenthMethod: null
  };

  public onChooseShippingMethod(shippingMethod: IShippingMethod): void {
    this.checkout = { ...this.checkout, shippingMethod };
    console.log('this.checkout: ', this.checkout);
  }

  public onChoosePaymentMethod(paymenthMethod: IPaymentMethod): void {
    this.checkout = { ...this.checkout, paymenthMethod };
    console.log('this.checkout: ', this.checkout);
  }

  constructor() {}

  ngOnInit() {}
}
