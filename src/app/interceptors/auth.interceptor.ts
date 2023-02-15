import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const jwtBearerToken = localStorage.getItem('id_token');

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