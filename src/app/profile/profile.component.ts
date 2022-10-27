import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { PostsService } from '../core/posts/posts.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    posts: IPost[] = [];

    constructor(private postsService: PostsService) { }

    ngOnInit(): void {
        this.postsService.getAllPosts().subscribe(res => {
            if (res.data && res.data.length > 0) {
                console.log(res);
                res.data.forEach(post => {
                    this.posts.push(post);
                })
            }
        })
    }
}
