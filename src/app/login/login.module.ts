import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { AdminRoutingModule } from "./login-routing.module";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
})
export class LoginModule { }