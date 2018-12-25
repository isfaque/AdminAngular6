import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HeaderComponent } from './views/include/header/header.component';
import { FooterComponent } from './views/include/footer/footer.component';
import { SidebarComponent } from './views/include/sidebar/sidebar.component';
import { UsermanagementComponent } from './views/usermanagement/usermanagement.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UsermanagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
