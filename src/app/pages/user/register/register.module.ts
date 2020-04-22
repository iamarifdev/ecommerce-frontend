import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { CreateAccountComponent } from './create-account/create-account.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../../../shared/shared.module';
import { ComponentsModule } from '../../components/components.module';
import { RegisterService } from './register.service';

const routes: Route[] = [{ path: '', component: RegisterComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, ComponentsModule],
  declarations: [RegisterComponent, CreateAccountComponent],
  providers: [RegisterService]
})
export class RegisterModule {}
