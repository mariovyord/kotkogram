import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { environment } from 'src/environments/environment';
import { IUserServerResponse } from '../../shared/interfaces/IUserServerResponse';
import { IGenericServerResponse } from '../../shared/interfaces/IGenericServerResponse';
import { tap, map, catchError } from 'rxjs/operators';


const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: IUser | undefined = undefined;
    loading = true;

    constructor(private http: HttpClient) { }

    loadUser() {
        return this.http.get<IUserServerResponse>(API_URL + '/users/me', {
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
        return this.http.post<IUserServerResponse>(API_URL + '/users/login', { username, password },
            { withCredentials: true })
            .pipe(tap(res => {
                if (res.data) {
                    this.user = res.data;
                }
            }))
    }

    signOut() {
        return this.http.delete(API_URL + '/users/logout',
            { withCredentials: true }).pipe(tap(() => {
                this.user = undefined
            }))
    }

    signUp(userData: any) {
        return this.http.post<IUserServerResponse>(API_URL + '/users/signup', userData,
            { withCredentials: true })
            .pipe(tap(res => {
                if (res.data) {
                    this.user = res.data;
                }
            }))
    }

    isUsernameUnique(username: string) {
        return this.http.post<IGenericServerResponse>(API_URL + '/users/isunique',
            { username });
    }

    followUser(followedUserId: string) {
        return this.http.post<IGenericServerResponse>(API_URL + `/users/${followedUserId}/follow`,
            {},
            { withCredentials: true })
    }
}
