import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { pagesRoutes } from './pages.routes';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pagesRoutes)
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
