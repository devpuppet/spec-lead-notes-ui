import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PeopleComponent } from "./components/people/people.component";
import { EditMeetingComponent } from "./components/edit-meeting/edit-meeting.component";

const routes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'meeting/:id', component: EditMeetingComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PeopleRoutingModule { }