import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { environment } from 'src/environments/environment';
import { IUserServerResponse } from '../../shared/interfaces/IUserServerResponse';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: IUser | undefined = undefined;
    loading = true;

    constructor(private http: HttpClient) { }

    loadUser() {
        return this.http.get<IUserServerResponse>(environment.apiUrl + '/users/me', {
            withCredentials: true
        }).pipe(map(res => {
            this.loading = false;
            if (res.data) {
                this.user = res.data;
            }
            return res.data;
        }),
            catchError((err) => {
                this.loading = false;
                this.user = undefined
                return err;
            }))
    }

    signIn(username: string, password: string) {
        return this.http.post<IUserServerResponse>(environment.apiUrl + '/users/login', { username, password },
            { withCredentials: true })
            .pipe(tap(res => {
                if (res.data) {
                    this.user = res.data;
                }
            }))
    }

    signOut() {
        return this.http.delete(environment.apiUrl + '/users/logout',
            { withCredentials: true }).pipe(tap(() => {
                this.user = undefined
            }))
    }

    signUp(userData: any) {
        return this.http.post<IUserServerResponse>(environment.apiUrl + '/users/signup', userData,
            { withCredentials: true })
            .pipe(tap(res => {
                if (res.data) {
                    this.user = res.data;
                }
            }))
    }
}
