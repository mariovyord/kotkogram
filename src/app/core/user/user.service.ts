import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { environment } from 'src/environments/environment';
import { IUserServerResponse } from '../../shared/interfaces/IUserServerResponse';
import { of, tap, map, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    _user = new BehaviorSubject<IUser | undefined>(undefined);
    isLoading = false;

    constructor(private http: HttpClient) { }

    get user() {
        if (this._user.value) {
            this.loadUser();
        }
        return this._user.asObservable();
    }

    loadUser(): void {
        if (this.isLoading === false) {
            this.isLoading = true;
            this.http.get<IUserServerResponse>(environment.apiUrl + '/users/me', {
                withCredentials: true
            }).subscribe(res => {
                if (res.data) {
                    this._user.next(res.data);
                }
                this.isLoading = false;
            })
        }
    }

    signIn(username: string, password: string) {
        return this.http.post<IUserServerResponse>(environment.apiUrl + '/users/login', { username, password },
            { withCredentials: true })
            .pipe(tap(res => {
                if (res.data) {
                    this._user.next(res.data);
                }
            }))
    }

    signOut() {
        return this.http.delete(environment.apiUrl + '/users/logout',
            { withCredentials: true }).pipe(tap(() => {
                this._user.next(undefined);
            }))
    }

    signUp(userData: any) {
        return this.http.post<IUserServerResponse>(environment.apiUrl + '/users/signup', userData,
            { withCredentials: true })
            .pipe(tap(res => {
                if (res.data) {
                    this._user.next(res.data);
                }
            }))
    }
}
