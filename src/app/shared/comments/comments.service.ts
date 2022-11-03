import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICommentsServerResponse } from 'src/app/shared/interfaces/ICommentsServerResponse';
import { IOneCommentServerResponse } from 'src/app/shared/interfaces/IOneCommentServerResponse';
import { selectUser } from 'src/app/store/selectors';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class CommentsService {
    user$ = this.store.select(selectUser);

    constructor(private userService: UserService, private http: HttpClient, private store: Store<any>) { }

    getComments(id: string) {
        return this.http.get<ICommentsServerResponse>(`/api/collections/comments?where=post=${id}&sortBy=createdAt desc&populate=owner`);
    }

    postComment(body: string, postId: string) {
        return this.http.post<IOneCommentServerResponse>(`/api/collections/comments`, {
            body: body,
            post: postId,
        });
    }
}
