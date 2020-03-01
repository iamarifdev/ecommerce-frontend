import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MenuFoldOutline, MenuUnfoldOutline, FormOutline, DashboardOutline } from '@ant-design/icons-angular/icons';
import {
  NZ_ICONS,
  NgZorroAntdModule,
  NzDrawerModule,
  NzCardModule,
  NzEmptyModule,
  NzSpinModule,
  NzToolTipModule,
  NzModalModule,
  NzSelectModule
} from 'ng-zorro-antd';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { CartOpenerComponent } from './components/cart-opener.component';
import { OverlayLoaderComponent } from './components/overlay-loader.component';
import { ImageZoomViewerComponent } from './components/image-zoom-viewer/image-zoom-viewer.component';
import { ItemCounterComponent } from '../pages/orders/carts';
const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];

@NgModule({
  imports: [
    CommonModule,
    LazyLoadImageModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ScrollingModule,
    DragDropModule,
    NgZorroAntdModule,
    NzIconModule,
    NzGridModule,
    NzDrawerModule,
    NzCardModule,
    NzEmptyModule,
    NzSpinModule,
    NzToolTipModule,
    NzModalModule,
    NzSelectModule
  ],
  declarations: [CartOpenerComponent, OverlayLoaderComponent, ImageZoomViewerComponent, ItemCounterComponent],
  exports: [
    CommonModule,
    LazyLoadImageModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ScrollingModule,
    DragDropModule,
    NgZorroAntdModule,
    NzIconModule,
    NzGridModule,
    NzDrawerModule,
    NzCardModule,
    NzEmptyModule,
    NzSpinModule,
    NzToolTipModule,
    NzModalModule,
    NzSelectModule,
    CartOpenerComponent,
    OverlayLoaderComponent,
    ImageZoomViewerComponent,
    ItemCounterComponent
  ],
  providers: [{ provide: NZ_ICONS, useValue: icons }]
})
export class SharedModule {}
