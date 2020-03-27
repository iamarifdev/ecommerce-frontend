import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AsyncService } from '../../../../shared/services/async.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit, OnDestroy {
  public accountForm: FormGroup;
  public isVerificationCodeSent: boolean;
  public isVerified: boolean;
  public accountCreated: boolean;

  constructor(private fb: FormBuilder, public asyncService: AsyncService, private registerService: RegisterService) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      phoneNo: [null, Validators.compose([Validators.required, Validators.pattern(/^01[3456789][0-9]{8}$/)])],
      verificationCode: [
        null,
        Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])
      ],
      email: [null, [Validators.email]]
    });
  }

  public requestVerificationCode(): void {
    const phoneNo = this.accountForm.get('phoneNo').value;
    if (phoneNo) {
      this.asyncService.start();
      this.registerService.sendVerificationCode(phoneNo).subscribe(
        response => {
          if (response.success && response.result) {
            this.isVerificationCodeSent = true;
          }
          this.asyncService.finish();
        },
        error => {
          console.log(error);
          this.isVerificationCodeSent = false;
          this.asyncService.finish();
        }
      );
    }
  }

  public verifyPhoneNumber(): void {
    if (this.accountForm.invalid) {
      return;
    }
    const { phoneNo, verificationCode } = this.accountForm.value;
    if (phoneNo && verificationCode) {
      this.asyncService.start();
      this.registerService.verifyPhoneNumber(phoneNo, verificationCode).subscribe(
        response => {
          if (response.success && response.result) {
            this.isVerified = response.result;
          }
          this.asyncService.finish();
        },
        error => {
          console.log(error);
          this.isVerified = false;
          this.asyncService.finish();
        }
      );
    }
  }

  createAccount(): void {
    if (this.accountForm.invalid) {
      return;
    }
    const { phoneNo, verificationCode, email } = this.accountForm.value;
    if (phoneNo && verificationCode) {
      this.asyncService.start();
      this.registerService.createAccount(phoneNo, verificationCode, email).subscribe(
        response => {
          // TODO: implement model
          if (response.success && response.result) {
            this.accountCreated = !!response.result;
          }
          this.asyncService.finish();
        },
        error => {
          console.log(error);
          this.accountCreated = false;
          this.asyncService.finish();
        }
      );
    }
  }

  ngOnDestroy(): void {
    if (this.asyncService) {
      this.asyncService.finish();
    }
  }
}
