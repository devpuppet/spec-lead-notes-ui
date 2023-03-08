import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PeopleComponent } from "./components/people/people.component";
import { UnitComponent } from "./components/unit/unit.component";
import { PeopleRoutingModule } from "./people-routing.module";
import { UnitsService } from "./services/units.service";
import { PersonComponent } from './components/person/person.component';
import { MeetingComponent } from './components/meeting/meeting.component';

@NgModule({
    declarations: [
        PeopleComponent,
        UnitComponent,
        PersonComponent,
        MeetingComponent
    ],
    imports: [
        CommonModule,
        PeopleRoutingModule
    ],
    providers: [UnitsService],
})
export class PeopleModule { }