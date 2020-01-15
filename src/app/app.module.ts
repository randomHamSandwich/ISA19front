import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';


import { httpInterceptorProviders } from './auth/auth-interceptor';
import { PacijentComponent } from './pacijent/pacijent.component';
import { KlinikaComponent } from './klinika/klinika.component';
import { KlinikaListComponent } from './klinika-list/klinika-list.component';
import { PacijentUpdateComponent } from './pacijent-update/pacijent-update.component';
import { UpdatePasswordComponent } from './pacijent-update/update-password/update-password.component';
import { LekarComponent } from './lekar/lekar.component';
import { LekarListComponent } from './lekar-list/lekar-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PacijentComponent,
    KlinikaComponent,
    KlinikaListComponent,
    PacijentUpdateComponent,
    UpdatePasswordComponent,
    LekarComponent,
    LekarListComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
