import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { IPostsServerResponse } from 'src/app/shared/interfaces/IPostsServerResponse';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { of, map, Subscription } from 'rxjs';
import { IOnePostServerResponse } from 'src/app/shared/interfaces/IOnePostServerResponse';
import { IGenericServerResponse } from 'src/app/shared/interfaces/IGenericServerResponse';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/store/selectors';
import { IUser } from '../interfaces/IUser';

const PAGE_SIZE = 9;

@Injectable({
    providedIn: 'root'
})
export class PostsService implements OnDestroy {
    allPosts: IPost[] = [];
    feedPosts: IPost[] = [];

    getUserData$: Subscription;
    user: IUser | null | undefined;

    constructor(private http: HttpClient, private store: Store<any>) {
        this.getUserData$ = this.store.select(selectUser).subscribe(user => {
            this.user = user;
        })
    }

    ngOnDestroy(): void {

        this.getUserData$.unsubscribe();
    }
    getOnePost(id: string) {
        for (let post of this.allPosts) {
            if (post._id === id) {
                return of(post);
            }
        }

        for (let post of this.feedPosts) {
            if (post._id === id) {
                return of(post);
            }
        }

        return this.http.get<IOnePostServerResponse>(`/api/collections/posts/${id}?populate=owner`).pipe(map(res => {
            return res.data;
        }))
    }

    getAllPosts(page: number) {
        return this.http.get<IPostsServerResponse>(`/api/collections/posts?page=${page}&pageSize=${PAGE_SIZE}&sortBy=createdAt desc&populate=owner`).pipe(tap(res => {
            if (res.data && res.data.length > 0) {
                res.data.forEach(post => {
                    this.allPosts.push(post);
                })
            }
        }))
    }


    getUserPosts(id: string, page: number) {
        return this.http.get<IPostsServerResponse>(`/api/collections/posts?page=${page}&pageSize=${PAGE_SIZE}&populate=owner&where=owner=${id}&sortBy=createdAt desc`).pipe(tap(res => {
            if (res.data && res.data.length > 0) {
                res.data.forEach(post => {
                    this.feedPosts.push(post);
                })
            }
        }))
    }

    getUserPostsCount(id: string) {
        return this.http.get<IGenericServerResponse>(`/api/collections/posts?where=owner=${id}&count=true`);
    }

    createPost(imageUrl: string, description: string) {
        return this.http.post('/api/collections/posts', {
            imageUrl, description,
        },)
    }

    deletePost(postId: string) {
        return this.http.delete(`/api/collections/posts/${postId}`,)
            .pipe(tap(() => {
                this.allPosts = this.allPosts.filter(x => x._id !== postId);
                this.feedPosts = this.feedPosts.filter(x => x._id !== postId);
            }))
    }

    likePost(postId: string) {
        return this.http.post(`/api/collections/posts/${postId}/like`, {},);
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
                    res.data.forEach(post => {
                        this.feedPosts.push(post);
                    })
                }
            }))
    }
}
