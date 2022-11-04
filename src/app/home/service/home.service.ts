import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { IPostsServerResponse } from 'src/app/shared/interfaces/IPostsServerResponse';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as postsActions from '../store/actions';
import { selectUser } from 'src/app/store/selectors';
import { IUser } from 'src/app/shared/interfaces/IUser';

const PAGE_SIZE = 9;

@Injectable()
export class HomeService implements OnDestroy {
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

    getAllPosts(page: number) {
        return this.http.get<IPostsServerResponse>(`/api/collections/posts?page=${page}&pageSize=${PAGE_SIZE}&sortBy=createdAt desc&populate=owner`)
            .pipe(tap(res => {
                if (res.data && res.data.length > 0) {
                    console.log(res.data)
                    this.store.dispatch(postsActions.loadPosts({ posts: res.data }))
                }
            }))
    }
}
