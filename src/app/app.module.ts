import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { SummaryComponent } from './components/summary/summary.component';
import { PeopleComponent } from './components/people/people.component';
import { UnitComponent } from './components/unit/unit.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SummaryComponent,
    PeopleComponent,
    UnitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
