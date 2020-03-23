import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MenuFoldOutline, MenuUnfoldOutline, FormOutline, DashboardOutline } from '@ant-design/icons-angular/icons';
import { NZ_ICONS } from 'ng-zorro-antd';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { CartOpenerComponent } from './components/cart-opener.component';
import { OverlayLoaderComponent } from './components/overlay-loader.component';
import { ImageZoomViewerComponent } from './components/image-zoom-viewer/image-zoom-viewer.component';
import { ItemCounterComponent } from '../pages/orders/carts';
import { NgAntdModule } from './ng-antd.module';
const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];

@NgModule({
  imports: [
    CommonModule,
    LazyLoadImageModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgAntdModule
  ],
  declarations: [CartOpenerComponent, OverlayLoaderComponent, ImageZoomViewerComponent, ItemCounterComponent],
  exports: [
    CommonModule,
    LazyLoadImageModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgAntdModule,
    CartOpenerComponent,
    OverlayLoaderComponent,
    ImageZoomViewerComponent,
    ItemCounterComponent
  ],
  providers: [{ provide: NZ_ICONS, useValue: icons }]
})
export class SharedModule {}
