import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

import { ApiService } from '../../../shared/services/api.service';
import { ShippingMethod } from './models/shipping-method.model';
import { ApiResponse } from '../../../models';
import { PaymentMethod } from './models/payment-method.model';
import { OrderAdd } from '../models';

@Injectable()
export class CheckoutService {
  constructor(private apiService: ApiService) {}

  public getShippingMethods(): Observable<ApiResponse<ShippingMethod[]>> {
    return this.apiService.get<ApiResponse<ShippingMethod[]>>(
      '/shipping-methods/list',
      new HttpParams({ fromObject: { sort: 'methodName', order: '-1' } })
    );
  }

  public getPaymentMethods(): Observable<ApiResponse<PaymentMethod[]>> {
    return this.apiService.get<ApiResponse<PaymentMethod[]>>(
      '/payment-methods/list',
      new HttpParams({ fromObject: { sort: 'methodName', order: '1' } })
    );
  }

  // TODO: add typing
  public addOrderWithoutPayment(order: OrderAdd): Observable<ApiResponse> {
    return this.apiService.post<ApiResponse>(`/orders/add`, order);
  }
}
