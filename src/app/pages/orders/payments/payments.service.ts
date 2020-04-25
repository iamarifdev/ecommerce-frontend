import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { InitResponse } from './models/init-response.model';
import { ApiService } from '../../../shared/services/api.service';
import { ApiResponse } from '../../../models';
import { Currency } from '../models/currency.enum';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private baseUrl = '/payments';

  constructor(private apiService: ApiService) {}

  public initiateTransaction(customerId: string): Observable<ApiResponse<InitResponse>> {
    return this.apiService.post<ApiResponse<InitResponse>>(`${this.baseUrl}/transaction/initiate`, {
      value_a: customerId,
      // TODO: implement customer currency to choose it
      currency: Currency.BDT
    });
  }
}
