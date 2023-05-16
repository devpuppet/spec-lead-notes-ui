import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { HomeComponent } from "./components/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { UnitsService } from "./services/units.service";

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CoreModule
    ],
    providers: [UnitsService, DatePipe],
})
export class HomeModule { }