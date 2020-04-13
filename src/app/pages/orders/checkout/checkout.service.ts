import { Injectable } from '@angular/core';

import { ApiService } from '../../../shared/services/api.service';
import { Observable } from 'rxjs';
import { IShippingMethod } from './models/shipping-method.model';
import { ApiResponse } from 'src/app/models';
import { HttpParams } from '@angular/common/http';
import { IPaymentMethod } from './models/payment-method.model';

@Injectable()
export class CheckoutService {
  constructor(private apiService: ApiService) {}

  public getShippingMethods(): Observable<ApiResponse<IShippingMethod[]>> {
    return this.apiService.get<ApiResponse<IShippingMethod[]>>(
      '/shipping-methods/list',
      new HttpParams({ fromObject: { sort: 'methodName', order: '-1' } })
    );
  }

  public getPaymentMethods(): Observable<ApiResponse<IPaymentMethod[]>> {
    return this.apiService.get<ApiResponse<IPaymentMethod[]>>(
      '/payment-methods/list',
      new HttpParams({ fromObject: { sort: 'methodName', order: '1' } })
    );
  }
}
