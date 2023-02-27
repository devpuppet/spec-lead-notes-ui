import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PeopleComponent } from "./components/people/people.component";
import { UnitComponent } from "./components/unit/unit.component";

@NgModule({
    declarations: [PeopleComponent, UnitComponent],
    imports: [CommonModule],
    providers: [],
})
export class PeopleModule { }