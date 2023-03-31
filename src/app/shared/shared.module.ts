import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { YesNoToBooleanMapper } from "./mappers/yes-no.mapper";
import { AuthService } from "./services/auth/auth.service";
import { AuthGuardService } from "./services/guards/auth-guard.service";
import { YesNoPipe } from './pipes/yes-no.pipe';

@NgModule({
    declarations: [
    YesNoPipe
  ],
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
    exports: [
        YesNoPipe
    ]
})
export class SharedModule { }