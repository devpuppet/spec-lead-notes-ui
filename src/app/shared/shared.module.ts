import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { YesNoToBooleanMapper } from "./mappers/yes-no.mapper";
import { AuthService } from "./services/auth/auth.service";
import { AuthGuardService } from "./services/guards/auth-guard.service";
import { YesNoPipe } from './pipes/yes-no.pipe';
import { ErrorBoxComponent } from './components/error-box/error-box.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { NgMaterialModule } from "../ng-material/ng-material.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        YesNoPipe,
        ErrorBoxComponent,
        DatepickerComponent
    ],
    imports: [
        CommonModule,
        NgMaterialModule,
        ReactiveFormsModule
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
        YesNoPipe,
        ErrorBoxComponent,
        DatepickerComponent
    ]
})
export class SharedModule { }