import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../views/login/login.component';
import { SignupComponent } from '../views/signup/signup.component';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { UsermanagementComponent } from '../views/usermanagement/usermanagement.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/usermanagement', component: UsermanagementComponent },
  { path : '', component : LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
