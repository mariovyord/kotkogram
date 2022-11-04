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

@Injectable(
    {
        providedIn: 'root'
    }
)
export class PostsService implements OnDestroy {
    allPosts: IPost[] = [];
    feedPosts: IPost[] = [];

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

    createPost(imageUrl: string, description: string) {
        return this.http.post('/api/collections/posts', {
            imageUrl, description,
        },)
    }


}
