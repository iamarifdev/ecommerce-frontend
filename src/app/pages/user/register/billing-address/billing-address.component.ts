import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.scss']
})
export class BillingAddressComponent implements OnInit {
  public billingAddressForm: FormGroup;
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
    this.billingAddressForm = this.fb.group({
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
