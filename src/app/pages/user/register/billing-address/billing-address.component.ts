import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { getCountries, getStates, ICountry, IState } from '../../../../data/country-states.data';
import { AsyncService } from '../../../../shared/services/async.service';
import { RegisterService } from '../register.service';
import { ICustomer } from '../models/customer.model';

@Component({
  selector: 'billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.scss']
})
export class BillingAddressComponent implements OnInit, OnDestroy {
  public billingAddressForm: FormGroup;

  public countryList: ICountry[] = [];
  public selectedCountry = 'Bangladesh';
  public stateList: IState[] = [];
  public selectedState = 'Dhaka';

  public sub: Subscription;

  @Input()
  public customer: ICustomer;

  @Output()
  public completeStep = new EventEmitter<ICustomer>(null);

  compareFn = (o1: any, o2: any) => (o1 && o2 ? o1.value === o2.value : o1 === o2);

  constructor(private fb: FormBuilder, public asyncService: AsyncService, private registerService: RegisterService) {}

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

    this.countryList = getCountries();
    if (this.customer && this.customer.billingAddress) {
      this.billingAddressForm.patchValue(this.customer.billingAddress);
    } else {
      this.billingAddressForm.patchValue({
        phoneNo: this.customer.phoneNo,
        email: this.customer.email || null
      });
    }
  }

  public onChangeCountry() {
    if (this.selectedCountry) {
      this.stateList = getStates(this.selectedCountry);
      this.selectedState = this.stateList[0].name;
    }
  }

  public updateBillingAddress(): void {
    if (this.customer && this.billingAddressForm.valid) {
      this.asyncService.start();
      this.sub = this.registerService.updateBillingAddress(this.customer.id, this.billingAddressForm.value).subscribe(
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

  ngOnDestroy(): void {
    if (this.asyncService) {
      this.asyncService.finish();
    }
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
