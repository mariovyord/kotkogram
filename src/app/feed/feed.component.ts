import { Component, OnInit } from '@angular/core';
import { PostsService } from '../core/posts/posts.service';
import { IPost } from '../shared/interfaces/IPost';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
    posts: IPost[] = [];

    constructor(private postsService: PostsService) { }

    ngOnInit() {
        this.postsService.getAllFeedPosts().subscribe(res => {
            if (res.data && res.data.length > 0) {
                res.data.forEach(post => {
                    this.posts.push(post);
                })
            }
        })
    }

}
