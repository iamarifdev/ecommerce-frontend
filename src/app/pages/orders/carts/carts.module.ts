import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CartContainerComponent, CartItemCounterComponent } from './index';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    ScrollingModule,
    DragDropModule
  ],
  declarations: [CartContainerComponent, CartItemCounterComponent],
  exports: [CartContainerComponent]
})
export class CartsModule {}
