import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/shared/model/authresponse';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authToken: string = '';
    constructor(public http: HttpClient) {
    }
    authenticateUser(username: string, password: string) {
        let authUrl = environment.apiurl + '/integration/admin/token?username=' + username + '&password=' + password;
        return this.http.post<string>(authUrl, null)
            .pipe(map(token => {

                this.authToken = token;
                //return { isSuccess: false, error: 'message' };
                return token;
            }), catchError(err => {
                //debugger;
                alert(err.error.message);
                //let authResponse: AuthResponse = { error: err.message, isSuccess: false };
                return '';
            }));
        // return this.http.post(authUrl, null).subscribe((response) => {
        //     return null;
        // })
    }

    logout() {
        this.authToken = ''
    }

    getAuthToken(): string {
        return this.authToken;
    }
}