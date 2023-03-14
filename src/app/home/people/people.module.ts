import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PeopleComponent } from "./components/people/people.component";
import { UnitComponent } from "./components/unit/unit.component";
import { PeopleRoutingModule } from "./people-routing.module";
import { UnitsService } from "./services/units.service";
import { PersonComponent } from './components/person/person.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { NgMaterialModule } from "src/app/ng-material/ng-material.module";
import { AddMeetingModalComponent } from "./components/add-meeting-modal/add-meeting-modal.component";

@NgModule({
    declarations: [
        PeopleComponent,
        UnitComponent,
        PersonComponent,
        MeetingComponent,
        AddMeetingModalComponent
    ],
    imports: [
        CommonModule,
        PeopleRoutingModule,
        NgMaterialModule
    ],
    providers: [UnitsService],
})
export class PeopleModule { }