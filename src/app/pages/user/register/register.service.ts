import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../../shared/services/api.service';
import { ApiResponse, IIdentityResult } from '../../../models';
import { ICustomer } from './models/customer.model';

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

  public createAccount(phoneNo: string, verificationCode: string, email?: string): Observable<ApiResponse<ICustomer>> {
    return this.apiService.post<ApiResponse<any>>(`${this.customerUrl}/add`, { phoneNo, verificationCode, email });
  }

  public validateCustomer = (fieldName: string, controlValue: string): Observable<ApiResponse<IIdentityResult>> => {
    return this.apiService.post<ApiResponse<IIdentityResult>>(`${this.customerUrl}/validate/identity`, {
      [fieldName]: controlValue
    });
  }
}
