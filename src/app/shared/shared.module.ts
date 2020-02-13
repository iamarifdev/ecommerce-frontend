import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MenuFoldOutline, MenuUnfoldOutline, FormOutline, DashboardOutline } from '@ant-design/icons-angular/icons';
import { NZ_ICONS } from 'ng-zorro-antd';

import { CartOpenerComponent } from './components/cart-opener.component';

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];

@NgModule({
  imports: [CommonModule, NzIconModule],
  declarations: [CartOpenerComponent],
  exports: [CartOpenerComponent],
  providers: [{ provide: NZ_ICONS, useValue: icons }]
})
export class SharedModule {}
