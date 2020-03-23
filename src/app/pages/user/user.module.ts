import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { UserComponent } from './user.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'register' },
  {
    path: 'register',
    component: UserComponent,
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [UserComponent]
})
export class UserModule {}
