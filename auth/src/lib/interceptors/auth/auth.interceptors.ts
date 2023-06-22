import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "@customer-admin-portal/auth";
import { Observable } from "rxjs";

@Injectable({ 
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthService) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const user = localStorage.getItem('user');
        const token = this.authenticationService.currentUserValue;
        console.log(this.authenticationService.currentUserValue);
        if (token) {
          req = req.clone({
              headers: req.headers.set('Authorization', token.token)
            });
          } 
          return next.handle(req);
    }
}