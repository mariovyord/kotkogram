import { Component, OnInit } from '@angular/core';
import { IPost } from '../shared/interfaces/IPost';
import { MatDialog } from '@angular/material/dialog';
import { PostsService } from '../core/posts/posts.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    posts: IPost[] = [];

    constructor(
        public dialog: MatDialog,
        private postsService: PostsService
    ) { }

    ngOnInit() {
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
