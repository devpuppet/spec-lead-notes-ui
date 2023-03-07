import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthService } from "./services/auth/auth.service";
import { AuthGuardService } from "./services/guards/auth-guard.service";

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        AuthService,
        AuthGuardService
    ],
    exports: []
})
export class SharedModule { }