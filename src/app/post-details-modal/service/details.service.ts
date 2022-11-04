import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { IOnePostServerResponse } from 'src/app/shared/interfaces/IOnePostServerResponse';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/store/selectors';
import * as detailsActions from '../store/actions';
import { ICommentsServerResponse } from 'src/app/shared/interfaces/ICommentsServerResponse';
import { IOneCommentServerResponse } from 'src/app/shared/interfaces/IOneCommentServerResponse';
import { IUser } from 'src/app/shared/interfaces/IUser';

const PAGE_SIZE = 9;

@Injectable()
export class DetailsService implements OnDestroy {
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

    getOnePost(id: string) {
        return this.http.get<IOnePostServerResponse>(`/api/collections/posts/${id}?populate=owner`)
            .pipe(tap(res => {
                if (res.data) {
                    console.log(res.data)
                    this.store.dispatch(detailsActions.loadPost({ post: res.data }))
                }
            }))
    }

    getComments(id: string) {
        return this.http.get<ICommentsServerResponse>(`/api/collections/comments?where=post=${id}&sortBy=createdAt desc&populate=owner`)
            .pipe(tap(res => {
                if (res.data && res.data.length > 0) {
                    this.store.dispatch(detailsActions.loadComments({ comments: res.data }))
                }
            }));
    }

    postComment(body: string, postId: string) {
        return this.http.post<IOneCommentServerResponse>(`/api/collections/comments`, {
            body: body,
            post: postId,
        });
    }

    deletePost(postId: string) {
        return this.http.delete(`/api/collections/posts/${postId}`,)
            .pipe(tap(() => {
                // this.allPosts = this.allPosts.filter(x => x._id !== postId);
                // this.feedPosts = this.feedPosts.filter(x => x._id !== postId);
            }))
    }

    likePost(postId: string) {
        return this.http.post(`/api/collections/posts/${postId}/like`, {},);
    }
}
