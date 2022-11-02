import { Component, OnInit } from '@angular/core';
import { IPost } from '../shared/interfaces/IPost';
import { MatDialog } from '@angular/material/dialog';
import { PostsService } from '../shared/posts/posts.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PostDetailsComponent } from '../post-details-modal/post-details/post-details.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
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
        this.page += 1;
        this.postsService.getAllPosts(this.page).subscribe(res => {
            if (res.data && res.data.length > 0) {
                res.data.forEach(post => {
                    this.posts.push(post);
                })
            }
        })
    }
}
