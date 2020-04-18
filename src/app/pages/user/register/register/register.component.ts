import { Component } from '@angular/core';
import { Customer } from '../../../../models/customer.model';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public customer: Customer;
  public index = 0;
  public disable = false;
  public step = 1;

  public changeIndex(index: number): void {
    this.index = index;
  }

  public onCreateAccount(customer: Customer): void {
    this.customer = customer;
    this.step = 2;
    this.changeIndex(1);
  }

  public onAddBillingAddress(customer: Customer): void {
    if (customer) {
      this.customer = customer;
    }
    this.step = 3;
    this.changeIndex(2);
  }

  public onAddShippingAddress(customer: Customer): void {
    if (customer) {
      this.customer = customer;
    }
    this.step = 4;
    this.changeIndex(3);
  }
}
