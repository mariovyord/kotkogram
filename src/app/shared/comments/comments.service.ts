import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICommentsServerResponse } from 'src/app/shared/interfaces/ICommentsServerResponse';
import { IOneCommentServerResponse } from 'src/app/shared/interfaces/IOneCommentServerResponse';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';

const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class CommentsService {
    get user() {
        return this.userService.user;
    }

    constructor(private userService: UserService, private http: HttpClient) { }

    getComments(id: string) {
        return this.http.get<ICommentsServerResponse>(API_URL + `/collections/comments?where=post=${id}&sortBy=createdAt desc&populate=owner`);
    }

    postComment(body: string, postId: string) {
        return this.http.post<IOneCommentServerResponse>(API_URL + `/collections/comments`, {
            body: body,
            post: postId,
        }, { withCredentials: true });
    }
}
