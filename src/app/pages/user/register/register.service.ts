import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../../shared/services/api.service';
import { ApiResponse, IdentityResult } from '../../../models';
import { Customer, CustomerAddress, CustomerAddModel } from './models';

@Injectable()
export class RegisterService {
  private verificationUrl = '/customer/verifications';
  private customerUrl = '/customers';

  constructor(private apiService: ApiService) {}

  public sendVerificationCode(phoneNo: string): Observable<ApiResponse<string>> {
    return this.apiService.post<ApiResponse<string>>(`${this.verificationUrl}/add`, { phoneNo });
  }

  public verifyPhoneNumber(phoneNo: string, verificationCode: string): Observable<ApiResponse<boolean>> {
    return this.apiService.patch<ApiResponse<boolean>>(`${this.verificationUrl}/verify/${phoneNo}`, {
      phoneNo,
      verificationCode
    });
  }

  public validateCustomer = (fieldName: string, controlValue: string): Observable<ApiResponse<IdentityResult>> => {
    return this.apiService.post<ApiResponse<IdentityResult>>(`${this.customerUrl}/validate/identity`, {
      [fieldName]: controlValue
    });
  };

  public createAccount(customer: CustomerAddModel): Observable<ApiResponse<Customer>> {
    return this.apiService.post<ApiResponse<Customer>>(`${this.customerUrl}/add`, customer);
  }
}
