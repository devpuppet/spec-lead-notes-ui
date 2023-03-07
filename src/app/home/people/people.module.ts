import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PeopleComponent } from "./components/people/people.component";
import { UnitComponent } from "./components/unit/unit.component";
import { PeopleRoutingModule } from "./people-routing.module";
import { UnitsService } from "./services/units.service";

@NgModule({
    declarations: [PeopleComponent, UnitComponent],
    imports: [
        CommonModule,
        PeopleRoutingModule
    ],
    providers: [UnitsService],
})
export class PeopleModule { }