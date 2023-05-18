import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SummaryComponent } from "./components/summary/summary.component";
import { SummaryRoutingModule } from "./summary-routing.module";
import { NgMaterialModule } from "src/app/ng-material/ng-material.module";

@NgModule({
    declarations: [SummaryComponent],
    imports: [
        CommonModule,
        SummaryRoutingModule,
        NgMaterialModule
    ],
    providers: [],
})
export class SummaryModule { }