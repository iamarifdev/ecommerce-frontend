import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { getCountries, getStates, ICountry, IState } from '../../../../data/country-states.data';
import { AsyncService } from '../../../../shared/services/async.service';
import { RegisterService } from '../register.service';
import { ICustomer } from '../models/customer.model';

@Component({
  selector: 'shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent implements OnInit, OnDestroy {
  public shippingAddressForm: FormGroup;
  public countryList: ICountry[] = [];
  public selectedCountry = 'Bangladesh';
  public stateList: IState[] = [];
  public selectedState = 'Dhaka';

  @Input()
  public customer: ICustomer;

  @Output()
  public completeStep = new EventEmitter<ICustomer>(null);

  compareFn = (o1: any, o2: any) => (o1 && o2 ? o1.value === o2.value : o1 === o2);

  constructor(private fb: FormBuilder, public asyncService: AsyncService, private registerService: RegisterService) {}

  ngOnInit(): void {
    this.shippingAddressForm = this.fb.group({
      sameToBillingAddress: [false, Validators.required],
      phoneNo: [null, Validators.required],
      email: [null, Validators.email],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      country: [null, Validators.required],
      state: [null, Validators.required],
      address: [null, Validators.required],
      city: [null, Validators.required],
      postalCode: [null, Validators.required]
    });

    this.countryList = getCountries();

    if (this.customer && this.customer.shippingAddress) {
      this.shippingAddressForm.patchValue(this.customer.shippingAddress);
    } else {
      this.shippingAddressForm.patchValue({
        phoneNo: this.customer.phoneNo,
        email: this.customer.email || null
      });
    }
  }

  public onChangeCountry(): void {
    if (this.selectedCountry) {
      this.stateList = getStates(this.selectedCountry);
      this.selectedState = this.stateList[0].name;
    }
  }

  public updateShippingAddress(): void {
    if (this.customer && this.shippingAddressForm.valid) {
      this.asyncService.start();
      this.registerService.updateShippingAddress(this.customer.id, this.shippingAddressForm.value).subscribe(
        response => {
          if (response.success && response.result) {
            this.customer = response.result;
            this.completeStep.emit(response.result);
          }
          this.asyncService.finish();
        },
        error => {
          console.log(error);
          this.asyncService.finish();
        }
      );
    }
  }

  public toggleSameToBillingAddress(checked: boolean): void {
    if (checked && this.customer.billingAddress) {
      this.shippingAddressForm.patchValue(this.customer.billingAddress);
    }
  }

  ngOnDestroy(): void {
    if (this.asyncService) {
      this.asyncService.finish();
    }
  }
}
