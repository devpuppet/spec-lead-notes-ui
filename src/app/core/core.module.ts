import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "../core/components/header/header.component";
import { CoreRoutingModule } from "./core-routing.module";

@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        CoreRoutingModule
    ],
    providers: [],
    exports: [HeaderComponent]
})
export class CoreModule { }