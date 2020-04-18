import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { first, tap } from 'rxjs/operators';

import { ApiResponse, AuthUser, RefreshTokenPair } from '../../models';
import { ApiService } from '../../shared/services/api.service';
import { StorageService } from '../../shared/services/storage.service';
import { Customer } from './register/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authUserSubJect = new BehaviorSubject<AuthUser>(null);

  constructor(
    private readonly router: Router,
    private readonly apiService: ApiService,
    private readonly storageService: StorageService
  ) {
    this.reloadAuthUser();
  }


  private reloadAuthUser(): void {
    if (!this.authUser) {
      const authUser = this.storageService.getUser();
      if (authUser) {
        this.authUserSubJect.next(authUser);
      }
    }
  }

  public getUserDetails(): Observable<ApiResponse<Customer>> {
    return this.apiService.get<ApiResponse<Customer>>(`/customers/${this.authUser.userId}`);
  }

  public authenticate(phoneNo: string, password: string): Observable<ApiResponse<AuthUser>> {
    return this.apiService
      .post<ApiResponse<AuthUser>>('/auth/login', { phoneNo, password })
      .pipe(
        tap((response) => {
          if (response && response.success && response.result) {
            const authUser = response.result;
            this.storageService.saveUser(authUser);
            this.storageService.saveAccessToken(authUser.accessToken);
            this.storageService.saveRefreshToken(authUser.refreshToken);
            this.updateAuthUser(authUser);
          }
        })
      );
  }

  public logout() {
    const { phoneNo, refreshToken } = this.storageService.getUser();
    return this.apiService
      .post<ApiResponse>('/auth/logout', { phoneNo, refreshToken })
      .pipe(
        first(),
        tap((response) => {
          if (response && response.success) {
            this.storageService.destroyAll();
            this.router.navigateByUrl('/home');
            this.updateAuthUser(null);
          }
        })
      );
  }

  public refreshSecurityTokenPair(): Observable<ApiResponse<RefreshTokenPair>> {
    const user = this.storageService.getUser();
    const refreshToken = this.storageService.getRefreshToken();
    const accessToken = this.storageService.getAccessToken();

    return this.apiService.post<ApiResponse<RefreshTokenPair>>('/auth/token/refresh', {
      userId: user.userId,
      accessToken,
      refreshToken,
    });
  }

  public get authUser$(): Observable<AuthUser> {
    return this.authUserSubJect.asObservable();
  }

  public get authUser(): AuthUser {
    return this.authUserSubJect.value;
  }

  public updateAuthUser(authUser: AuthUser): void {
    this.authUserSubJect.next(authUser);
  }
}
