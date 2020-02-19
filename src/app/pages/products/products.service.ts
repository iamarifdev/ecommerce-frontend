import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../../app/shared/services/api.service';
import { ApiPaginatedResponse } from '../../../app/models';
import { IProduct } from './models/product.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = '/products';
  constructor(private apiService: ApiService) {}

  getPaginatedProducts(
    page: number = 1,
    pageSize: number = 20,
    all: boolean = false
  ): Observable<ApiPaginatedResponse<IProduct>> {
    const params = new HttpParams({
      fromObject: {
        page: page.toString(),
        pageSize: pageSize.toString(),
        all: `${all}`
      }
    });
    return this.apiService.get<ApiPaginatedResponse<IProduct>>(`${this.baseUrl}/list`, params);
  }
}
