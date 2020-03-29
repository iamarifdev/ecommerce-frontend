import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { getCountries, getStates, ICountry, IState } from '../../../../data/country-states.data';

@Component({
  selector: 'shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent implements OnInit {
  public shippingAddressForm: FormGroup;
  public countryList: ICountry[] = [];
  public selectedCountry = 'Bangladesh';
  public stateList: IState[] = [];
  public selectedState = 'Dhaka';

  compareFn = (o1: any, o2: any) => (o1 && o2 ? o1.value === o2.value : o1 === o2);

  constructor(private fb: FormBuilder) {}

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
  }

  onChangeCountry() {
    if (this.selectedCountry) {
      this.stateList = getStates(this.selectedCountry);
      this.selectedState = this.stateList[0].name;
    }
  }

  submitForm(): void {}
}
