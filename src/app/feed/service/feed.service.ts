import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { selectUser } from 'src/app/store/selectors';
import { IPostsServerResponse } from 'src/app/shared/interfaces/IPostsServerResponse';
import * as feedActions from '../store/actions';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { selectFeedPosts } from '../store/selectors';

const PAGE_SIZE = 9;

@Injectable()
export class FeedService implements OnDestroy {
    getUserData$: Subscription;
    user: IUser | null | undefined;
    postsSubs$: Subscription;
    postsCount = 0;

    constructor(
        private http: HttpClient,
        private store: Store<any>
    ) {
        this.getUserData$ = this.store.select(selectUser).subscribe(user => {
            this.user = user;
        })
        this.postsSubs$ = this.store.select(selectFeedPosts).subscribe(posts => {
            this.postsCount = posts.length;
        })
    }

    ngOnDestroy(): void {
        this.getUserData$.unsubscribe();
        this.postsSubs$.unsubscribe();
    }

    getAllFeedPosts() {
        if (!this.user) { throw new Error('Need valid user to see feed') }

        const page = Math.ceil(this.postsCount / PAGE_SIZE + 1);
        console.log(page);

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
