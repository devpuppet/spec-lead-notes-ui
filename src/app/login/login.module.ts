import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./components/login/login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { NgMaterialModule } from "../ng-material/ng-material.module";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        NgMaterialModule
    ],
    providers: [],
})
export class LoginModule { }