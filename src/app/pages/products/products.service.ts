import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from '../../../app/shared/services/api.service';
import { ApiPaginatedResponse, ApiResponse } from '../../../app/models';
import { IProductListItem, IProduct } from './models';

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
  ): Observable<ApiPaginatedResponse<IProductListItem>> {
    const params = new HttpParams({
      fromObject: {
        page: page.toString(),
        pageSize: pageSize.toString(),
        all: `${all}`
      }
    });
    return this.apiService.get<ApiPaginatedResponse<IProductListItem>>(`${this.baseUrl}/list`, params);
  }

  getProductById(productId: string): Observable<ApiResponse<IProduct>> {
    return this.apiService.get<ApiResponse<IProduct>>(`${this.baseUrl}/${productId}`);
  }
}
