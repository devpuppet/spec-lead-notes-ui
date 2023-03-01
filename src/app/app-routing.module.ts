import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeopleComponent } from './people/components/people/people.component';
import { SummaryComponent } from './summary/components/summary/summary.component';
import { AuthGuardService } from './auth/services/guards/auth-guard.service';

const routes: Routes = [
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
