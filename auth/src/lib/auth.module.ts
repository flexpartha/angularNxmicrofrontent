import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { authRoutes } from './lib.routes';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MaterialModule } from '@customer-admin-portal/material'; 
import { ReactiveFormsModule } from '@angular/forms'
import { AuthInterceptor } from './interceptors/auth/auth.interceptors';

@NgModule({
  imports: [
    CommonModule,  
    RouterModule.forChild(authRoutes),
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, LoginFormComponent],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: AuthInterceptor,
  //     multi: true
  //   }
  // ]
})
export class AuthModule {}
