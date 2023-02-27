import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { AuthService } from "./services/auth/auth.service";
import { AuthGuardService } from "./services/guards/auth-guard.service";

@NgModule({
    declarations: [],
    imports: [],
    providers: [
        AuthService,
        AuthGuardService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
      ]
})
export class AuthModule { }