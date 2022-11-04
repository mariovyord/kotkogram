import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { selectUser } from 'src/app/store/selectors';
import { IPostsServerResponse } from 'src/app/shared/interfaces/IPostsServerResponse';
import * as feedActions from '../store/actions';

const PAGE_SIZE = 9;

@Injectable()
export class FeedService implements OnDestroy {
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

    getAllFeedPosts(page: number) {
        if (!this.user) { throw new Error('Need valid user to see feed') }

        const whereQuery: string[] = [];

        this.user.following.forEach(id => {
            whereQuery.push(`where=owner=${id}`)
        })

        return this.http.get<IPostsServerResponse>(`/api/collections/posts?page=${page}&pageSize=${PAGE_SIZE}&${whereQuery.join('&')}&sortBy=createdAt desc&populate=owner`)
            .pipe(tap(res => {
                if (res.data && res.data.length > 0) {
                    this.store.dispatch(feedActions.loadPosts({ posts: res.data }))
                }
            }))
    }
}
