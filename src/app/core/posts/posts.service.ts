import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { IPostsServerResponse } from 'src/app/shared/interfaces/IPostsServerResponse';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    allPosts: IPost[] = [];
    feedPosts: IPost[] = [];

    get user() {
        return this.userService.user;
    }

    constructor(private http: HttpClient, private userService: UserService) { }

    getOnePost(id: string) {
        for (let post of this.allPosts) {
            if (post._id === id) {
                return post
            }
        }

        for (let post of this.feedPosts) {
            if (post._id === id) {
                return post
            }
        }

        return undefined;
    }

    getAllPosts() {
        return this.http.get<IPostsServerResponse>(API_URL + '/collections/posts?populate=owner').pipe(tap(res => {
            if (res.data && res.data.length > 0) {
                res.data.forEach(post => {
                    this.allPosts.push(post);
                })
            }
        }))
    }

    getUserPosts() {
        if (this.user === undefined) { throw new Error('You need to sign in to view your posts') }

        return this.http.get<IPostsServerResponse>(API_URL + `/collections/posts?populate=owner&where=owner=${this.user._id}`).pipe(tap(res => {
            if (res.data && res.data.length > 0) {
                res.data.forEach(post => {
                    this.feedPosts.push(post);
                })
            }
        }))
    }

    createPost(imageUrl: string, description: string) {
        return this.http.post(API_URL + '/collections/posts', {
            imageUrl, description,
        }, {
            withCredentials: true
        })
    }

    likePost(postId: string) {
        return this.http.post(API_URL + `/collections/posts/${postId}/like`, {}, {
            withCredentials: true
        });
    }
}
