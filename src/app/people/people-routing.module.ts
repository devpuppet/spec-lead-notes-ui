import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SummaryComponent } from "../components/summary/summary.component";
import { PeopleComponent } from "./components/people/people.component";

const routes: Routes = [
    { path: '',
      children: [
        { path: 'summary', component: SummaryComponent },
        { path: 'people', component: PeopleComponent }
      ]},
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }