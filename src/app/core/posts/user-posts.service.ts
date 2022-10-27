import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class UserPostsService {

    constructor(private http: HttpClient) { }

    createPost(imageUrl: string, description: string) {
        return this.http.post(API_URL + '/collections/posts', {
            imageUrl, description,
        }, {
            withCredentials: true
        })
    }
}
