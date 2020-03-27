import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent implements OnInit {
  public shippingAddressForm: FormGroup;
  public countryList = [
    { label: 'Bangladesh', value: 'Bangladesh' },
    { label: 'Afganistan', value: 'Afganistan' }
  ];
  public selectedCountry = this.countryList[0];

  public stateList = [
    { label: 'Dhaka', value: 'Dhaka' },
    { label: 'Chittagong', value: 'Chittagong' }
  ];
  public selectedState = this.stateList[0];

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
  }

  submitForm(): void {}
}
