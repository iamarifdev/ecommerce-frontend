import { Component, ViewEncapsulation } from '@angular/core';
import { ICustomer } from '../models/customer.model';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
  public customer: ICustomer;
  public index = 0;
  public disable = false;
  public step = 1;

  public changeIndex(index: number): void {
    this.index = index;
  }

  public onCreateAccount(customer: ICustomer): void {
    this.customer = customer;
    this.step = 2;
    this.changeIndex(1);
  }

  public onAddBillingAddress(customer: ICustomer): void {
    this.customer = customer;
    this.step = 3;
    this.changeIndex(2);
  }

  public onAddShippingAddress(customer: ICustomer): void {
    this.customer = customer;
    this.step = 4;
    this.changeIndex(3);
  }
}
