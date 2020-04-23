import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { IShippingMethod, IPaymentMethod } from './models';
import { Customer } from '../../user/register/models';
import { UserService } from '../../user/user.service';
import { PaymentsService } from '../payments/payments.service';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public selectedIndex = 0;
  public customer: Customer;

  public checkout = {
    shippingMethod: null,
    paymenthMethod: null
  };

  constructor(private location: Location, private userService: UserService, private paymentsService: PaymentsService) {}

  ngOnInit() {
    this.userService.getUserDetails().subscribe((response) => {
      if (response.success && response.result) {
        this.customer = response.result;
      }
    });
  }

  public onUpdateAddress(customer: Customer): void {
    this.customer = customer;
  }

  public onChooseShippingMethod(shippingMethod: IShippingMethod): void {
    this.checkout = { ...this.checkout, shippingMethod };
  }

  public onChoosePaymentMethod(paymenthMethod: IPaymentMethod): void {
    this.checkout = { ...this.checkout, paymenthMethod };
  }

  public initiateTransaction(): void {
    this.paymentsService.initiateTransaction().subscribe((response) => {
      if (response.success && response.result) {
        window.location.href = response.result.redirectGatewayURL;
        return true;
      }
    });
  }
}
