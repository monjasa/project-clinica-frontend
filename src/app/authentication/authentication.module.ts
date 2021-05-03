import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { Oauth2Component } from './oauth2/oauth2.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthenticationRoutingModule,
    NbAuthModule,
    NbIconModule,
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    Oauth2Component,
  ],
})
export class AuthenticationModule {
}
