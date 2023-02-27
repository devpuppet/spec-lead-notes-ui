import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './login/components/login/login.component';
import { PeopleComponent } from './components/people/people.component';
import { SummaryComponent } from './components/summary/summary.component';
import { AuthGuardService } from './services/guards/auth-guard.service';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      { path: 'summary', component: SummaryComponent },
      { path: 'people', component: PeopleComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
