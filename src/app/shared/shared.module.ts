import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { YesNoToBooleanMapper } from "./mappers/yes-no.mapper";
import { AuthService } from "./services/auth/auth.service";
import { AuthGuardService } from "./services/guards/auth-guard.service";

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        AuthService,
        AuthGuardService,
        {
            provide: YesNoToBooleanMapper,
            useClass: YesNoToBooleanMapper
        }
    ],
    exports: []
})
export class SharedModule { }