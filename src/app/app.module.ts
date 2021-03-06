import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { UserComponent } from './user/user.component';
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
import { PregledListComponent } from './pregled-list/pregled-list.component';
import { OperacijaListComponent } from './operacija-list/operacija-list.component';
import { BrziPreglediListComponent } from './brzi-pregledi-list/brzi-pregledi-list.component';
import { KartonComponent } from './karton/karton.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // UserComponent,
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
    PregledListComponent,
    OperacijaListComponent,
    BrziPreglediListComponent,
    KartonComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    Ng2SearchPipeModule, 
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
