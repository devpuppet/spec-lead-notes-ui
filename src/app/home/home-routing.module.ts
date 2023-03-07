import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "../shared/services/guards/auth-guard.service";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        canActivate: [AuthGuardService],
        canActivateChild: [AuthGuardService],
        children: [
            {
                path: 'people',
                loadChildren: () => import('./people/people.module').then(m => m.PeopleModule)
            },
            {
                path: 'summary',
                loadChildren: () => import('./summary/summary.module').then(m => m.SummaryModule)
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }