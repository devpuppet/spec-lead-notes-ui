import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SummaryComponent } from "./components/summary/summary.component";
import { SummaryRoutingModule } from "./summary-routing.module";

@NgModule({
    declarations: [SummaryComponent],
    imports: [
        CommonModule,
        SummaryRoutingModule
    ],
    providers: [],
})
export class SummaryModule { }