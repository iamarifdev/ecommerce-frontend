import { BrowserModule } from '@angular/platform-browser';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { NZ_I18N, en_US } from 'ng-zorro-antd';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CartsModule } from './pages/orders/carts/carts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsyncService } from './shared/services/async.service';
import { StorageService } from './shared/services/storage.service';
import { ApiService } from './shared/services/api.service';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    CartsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, ApiService, StorageService, AsyncService],
  bootstrap: [AppComponent]
})
export class AppModule {}
