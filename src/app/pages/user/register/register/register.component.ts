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

  public changeIndex(index: number): void {
    this.index = index;
  }

  public onCreateAccount(customer: ICustomer): void {
    this.customer = customer;
    this.changeIndex(1);
  }
}
