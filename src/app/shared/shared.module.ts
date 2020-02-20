import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MenuFoldOutline, MenuUnfoldOutline, FormOutline, DashboardOutline } from '@ant-design/icons-angular/icons';
import { NZ_ICONS, NgZorroAntdModule, NzDrawerModule, NzCardModule, NzEmptyModule, NzSpinModule } from 'ng-zorro-antd';

import { CartOpenerComponent } from './components/cart-opener.component';
import { OverlayLoaderComponent } from './components/overlay-loader.component';
const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];

@NgModule({
  imports: [
    CommonModule,
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
    NzSpinModule
  ],
  declarations: [CartOpenerComponent, OverlayLoaderComponent],
  exports: [
    CommonModule,
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
    CartOpenerComponent,
    OverlayLoaderComponent
  ],
  providers: [{ provide: NZ_ICONS, useValue: icons }]
})
export class SharedModule {}
