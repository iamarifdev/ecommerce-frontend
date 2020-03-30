import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Route[] = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
