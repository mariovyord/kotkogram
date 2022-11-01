import { Component, OnInit } from '@angular/core';
import { IPost } from '../shared/interfaces/IPost';
import { MatDialog } from '@angular/material/dialog';
import { PostsService } from '../core/posts/posts.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PostDetailsComponent } from '../post-details-modal/post-details/post-details.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    posts: IPost[] = [];
    page = 0;
    activatedUserId: string | undefined = undefined;

    constructor(
        private postsService: PostsService,
    ) { }

    ngOnInit() {
        this.getAllPosts()
    }

    onScrollDown() {
        this.getAllPosts();
    }

    onScrollUp() {
        console.log('UP')
    }

    getAllPosts() {
        this.postsService.getAllPosts(++this.page).subscribe(res => {
            if (res.data && res.data.length > 0) {
                res.data.forEach(post => {
                    this.posts.push(post);
                })
            }
        })
    }
}
