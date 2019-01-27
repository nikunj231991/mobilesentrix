import { throwError as observableThrowError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private authService: AuthService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.authService.getAuthToken() // auth is provided via constructor.
        if (token) {
            // Logged in. Add Bearer token.
            return next.handle(
                req.clone({
                    headers: req.headers.append('Authorization', 'Bearer ' + token)
                })
            );
        }
        return next.handle(req).pipe(catchError(
            (err: HttpErrorResponse) => {
                return observableThrowError(err);
            }
        ));
    }
}
