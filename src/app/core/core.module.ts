import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ForgetPasswordComponent,
    LoginComponent,
    MyAccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
