import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PeopleComponent } from "./components/people/people.component";
import { UnitComponent } from "./components/unit/unit.component";
import { PeopleRoutingModule } from "./people-routing.module";
import { PersonComponent } from './components/person/person.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { NgMaterialModule } from "src/app/ng-material/ng-material.module";
import { AddMeetingModalComponent } from "./components/add-meeting-modal/add-meeting-modal.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { PersonTooltipDirective } from "./directives/person.tooltip.directive";
import { PersonTooltipComponent } from './components/person-tooltip/person-tooltip.component';
import { EditMeetingComponent } from './components/edit-meeting/edit-meeting.component';

@NgModule({
    declarations: [
        PeopleComponent,
        UnitComponent,
        PersonComponent,
        MeetingComponent,
        AddMeetingModalComponent,
        PersonTooltipDirective,
        PersonTooltipComponent,
        EditMeetingComponent
    ],
    imports: [
        CommonModule,
        PeopleRoutingModule,
        NgMaterialModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [],
})
export class PeopleModule { }