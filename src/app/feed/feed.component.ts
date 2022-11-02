import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/posts/posts.service';
import { IPost } from '../shared/interfaces/IPost';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
    posts: IPost[] = [];
    page = 0;

    constructor(private postsService: PostsService) { }

    ngOnInit() {
        this.getFeedPosts()
    }

    getFeedPosts() {
        this.page += 1;
        this.postsService.getAllFeedPosts(this.page).subscribe(res => {
            if (res.data && res.data.length > 0) {
                res.data.forEach(post => {
                    this.posts.push(post);
                })
            }
        })
    }
}
