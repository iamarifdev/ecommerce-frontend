import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { CreateAccountComponent } from './create-account/create-account.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Route[] = [{ path: '', component: RegisterComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [CreateAccountComponent, RegisterComponent]
})
export class RegisterModule {}
