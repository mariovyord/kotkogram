import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { IUserServerResponse } from '../../shared/interfaces/IUserServerResponse';
import { IGenericServerResponse } from '../../shared/interfaces/IGenericServerResponse';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: IUser | undefined = undefined;
    loading = true;

    constructor(
        private http: HttpClient,
        private router: Router,
    ) { }

    loadUser() {
        return this.http.get<IUserServerResponse>('/api/users/me',)
            .pipe(map(res => {
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
        return this.http.post<IUserServerResponse>('/api/users/login', { username, password },)
            .pipe(tap(res => {
                if (res.data) {
                    this.user = res.data;
                }
            }))
    }

    signOut() {
        return this.http.delete('/api/users/logout',).pipe(tap(() => {
            this.user = undefined;
            this.router.navigateByUrl('/');
        }))
    }

    signUp(userData: any) {
        return this.http.post<IUserServerResponse>('/api/users/signup', userData,)
            .pipe(tap(res => {
                if (res.data) {
                    this.user = res.data;
                }
            }))
    }

    isUsernameUnique(username: string) {
        return this.http.post<IGenericServerResponse>('/api/users/isunique',
            { username });
    }

    followUser(followedUserId: string) {
        return this.http.post<IGenericServerResponse>(`/api/users/${followedUserId}/follow`,
            {},
            { withCredentials: true })
    }

    getUserData(id: string) {
        return this.http.get<IUserServerResponse>(`/api/users/${id}`, { withCredentials: true })
    }
}
