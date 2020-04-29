import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../user/user.service';
import { PaymentsService } from '../payments/payments.service';
import { CheckoutService } from './checkout.service';
import { Customer } from '../../user/register/models';
import { ShippingMethod, PaymentMethod, Checkout } from './models';
import { OrderAdd, Currency } from '../models';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public selectedIndex = 0;
  public customer: Customer;

  public checkout: Checkout = {
    paymentMethod: null,
    shippingMethod: null
  };

  constructor(
    private router: Router,
    private userService: UserService,
    private checkoutService: CheckoutService,
    private paymentsService: PaymentsService
  ) {}

  ngOnInit() {
    this.userService.getUserDetails().subscribe((response) => {
      if (response.success && response.result) {
        this.customer = response.result;
      }
    });
  }

  private initiateTransaction(order: OrderAdd): void {
    this.paymentsService.initiateTransaction(order).subscribe((response) => {
      if (response.success && response.result) {
        window.location.href = response.result.GatewayPageURL;
        return true;
      }
    });
  }

  private addOrderWithoutPayment(order: OrderAdd): void {
    this.checkoutService.addOrderWithoutPayment(order).subscribe((response) => {
      if (response.success && response.result) {
        // TODO: check information
        this.router.navigate(['/orders/payments/success']);
      }
    });
  }

  public onUpdateAddress(customer: Customer): void {
    this.customer = customer;
  }

  public onChooseShippingMethod(shippingMethod: ShippingMethod): void {
    this.checkout = { ...this.checkout, shippingMethod };
  }

  public onChoosePaymentMethod(paymentMethod: PaymentMethod): void {
    this.checkout = { ...this.checkout, paymentMethod };
  }

  public addOrder(): void {
    if (this.checkout.paymentMethod && this.checkout.shippingMethod) {
      const order: OrderAdd = {
        shippingMethodId: this.checkout.shippingMethod.id,
        paymentMethodId: this.checkout.paymentMethod.id,
        currency: Currency.BDT,
        customerId: this.customer.id
      };

      if (this.checkout.paymentMethod.hasPaymentGateway) {
        this.initiateTransaction(order);
      } else {
        this.addOrderWithoutPayment(order);
      }
    }
  }
}
