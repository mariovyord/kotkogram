import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { IPostsServerResponse } from 'src/app/shared/interfaces/IPostsServerResponse';
import { tap, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { IGenericServerResponse } from 'src/app/shared/interfaces/IGenericServerResponse';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/store/user.selectors';
import * as profileActions from '../store/profile.actions';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { selectActivatedUser, selectProfilePosts } from '../store/profile.feature';
import { IUserServerResponse } from 'src/app/shared/interfaces/IUserServerResponse';
import { loadUser } from 'src/app/store/user.actions';

const PAGE_SIZE = 9;

export interface editableUser {
    firstName: string,
    lastName: string,
    description: string,
    imageUrl: string,
}

@Injectable()
export class ProfileService implements OnDestroy {
    getUserData$: Subscription;
    user: IUser | null | undefined;
    activaredUser: IUser;
    activaredUserSub$: Subscription;
    postsSubs$: Subscription;
    postsCount: number = 0;

    constructor(
        private http: HttpClient,
        private store: Store<any>
    ) {
        this.activaredUserSub$ = this.store.select(selectActivatedUser).subscribe(user => {
            this.activaredUser = user!;
        })

        this.getUserData$ = this.store.select(selectUser).subscribe(user => {
            this.user = user;
        })
        this.postsSubs$ = this.store.select(selectProfilePosts).subscribe(posts => {
            this.postsCount = posts.length;
        })
    }

    ngOnDestroy(): void {
        this.getUserData$.unsubscribe();
        this.postsSubs$.unsubscribe();
    }

    getUserPosts(id?: string, wantedPage?: number) {
        const page = 1;
        // const page = wantedPage || Math.ceil(this.postsCount / PAGE_SIZE + 1);
        return this.http.get<IPostsServerResponse>(`/api/collections/posts?page=${page}&pageSize=${PAGE_SIZE}&populate=owner&where=owner=${id || this.activaredUser._id}&sortBy=createdAt desc`)
            .pipe(
                map(res => {
                    if (res.data && res.data.length > 0) {
                        return res.data;
                    } else {
                        throw new Error();
                    }
                }),
            )
    }

    getUserPostsCount(id: string) {
        return this.http.get<IGenericServerResponse>(`/api/collections/posts?where=owner=${id}&count=true`)
            .pipe(tap(res => {
                if (typeof res.data === 'number') {
                    this.store.dispatch(profileActions.loadPostsCount({ count: res.data }))
                }
            }))
    }

    editUser(data: editableUser) {
        return this.http.patch<IUserServerResponse>(`/api/users/${this.user?._id}`, data)
            .pipe(tap(() => {
                this.store.dispatch(loadUser());
            }))
    }

    isPasswordCorrect(password: string) {
        return this.http.post<IUserServerResponse>(`/api/users/${this.user?._id}/password`, { password });
    }

    changePassword(oldPassword: string, newPassword: string) {
        return this.http.patch<IUserServerResponse>(`/api/users/${this.user?._id}/password`, { oldPassword, newPassword });
    }
}
