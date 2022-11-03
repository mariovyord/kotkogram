import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { IUserServerResponse } from '../../shared/interfaces/IUserServerResponse';
import { IGenericServerResponse } from '../../shared/interfaces/IGenericServerResponse';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as userActions from '../../store/actions';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(
        private http: HttpClient,
        private router: Router,
        private store: Store<any>,
    ) { }

    loadUser() {
        return this.http.get<IUserServerResponse>('/api/users/me',).pipe(map(res => {
            if (res.data) {
                return res.data
            } else {
                throw new Error('No logged in user found');
            }
        }));
    }

    signIn(username: string, password: string) {
        return this.http.post<IUserServerResponse>('/api/users/login', { username, password },)
            .pipe(tap(res => {
                if (res.data) {
                    this.store.dispatch(userActions.setUser(res.data))
                }
            }))
    }

    signOut() {
        return this.http.delete('/api/users/logout',).pipe(
            tap(() => {
                this.store.dispatch(userActions.clearUser());
                this.router.navigateByUrl('/');
                // TODO Add Error handling
            }))
    }

    signUp(userData: any) {
        return this.http.post<IUserServerResponse>('/api/users/signup', userData,)
            .pipe(tap(res => {
                if (res.data) {
                    this.store.dispatch(userActions.setUser(res.data))
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
