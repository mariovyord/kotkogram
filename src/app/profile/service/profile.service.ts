import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { IPostsServerResponse } from 'src/app/shared/interfaces/IPostsServerResponse';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { IGenericServerResponse } from 'src/app/shared/interfaces/IGenericServerResponse';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/store/selectors';
import * as profileActions from '../store/actions';
import { IUser } from 'src/app/shared/interfaces/IUser';

const PAGE_SIZE = 9;

@Injectable()
export class ProfileService implements OnDestroy {
    getUserData$: Subscription;
    user: IUser | null | undefined;

    constructor(
        private http: HttpClient,
        private store: Store<any>
    ) {
        this.getUserData$ = this.store.select(selectUser).subscribe(user => {
            this.user = user;
        })
    }

    ngOnDestroy(): void {
        this.getUserData$.unsubscribe();
    }

    getUserPosts(id: string, page: number) {
        return this.http.get<IPostsServerResponse>(`/api/collections/posts?page=${page}&pageSize=${PAGE_SIZE}&populate=owner&where=owner=${id}&sortBy=createdAt desc`).pipe(tap(res => {
            if (res.data && res.data.length > 0) {
                this.store.dispatch(profileActions.loadPosts({ posts: res.data }))
            }
        }))
    }

    getUserPostsCount(id: string) {
        return this.http.get<IGenericServerResponse>(`/api/collections/posts?where=owner=${id}&count=true`)
            .pipe(tap(res => {
                if (typeof res.data === 'number') {
                    this.store.dispatch(profileActions.loadPostsCount({ count: res.data }))
                }
            }))
    }
}
