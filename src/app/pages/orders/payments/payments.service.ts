import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { InitResponse } from './models/init-response.model';
import { ApiService } from '../../../shared/services/api.service';
import { ApiResponse } from '../../../models';
import { Currency, OrderAdd } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private baseUrl = '/payments';

  constructor(private apiService: ApiService) {}

  public initiateTransaction(order: OrderAdd): Observable<ApiResponse<InitResponse>> {
    return this.apiService.post<ApiResponse<InitResponse>>(`${this.baseUrl}/transaction/initiate`, order);
  }
}
