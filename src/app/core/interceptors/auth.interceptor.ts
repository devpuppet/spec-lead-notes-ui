import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectBearerToken } from "src/app/login/store/login.selectors";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private store: Store) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let jwtBearerToken;
        this.store.select(selectBearerToken)
            .subscribe(result => {
                jwtBearerToken = result;
            });

        if (jwtBearerToken) {
            const clone = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + jwtBearerToken)
            });

            return next.handle(clone);
        } else {
            return next.handle(req);
        }
    }
    
}