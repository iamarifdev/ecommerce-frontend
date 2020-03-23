import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
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
  NzSelectModule,
  NzStepsModule
} from 'ng-zorro-antd';

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];

@NgModule({
  imports: [
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
    NzStepsModule
  ],
  exports: [
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
    NzStepsModule
  ],
  providers: [{ provide: NZ_ICONS, useValue: icons }]
})
export class NgAntdModule {}