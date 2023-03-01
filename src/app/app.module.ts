import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';
import { PeopleModule } from './people/people.module';
import { SummaryModule } from './summary/summary.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule,
    AuthModule,
    PeopleModule,
    SummaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
