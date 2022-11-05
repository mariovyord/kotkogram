import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FeedService } from './service/feed.service';
import { selectFeedPosts } from './store/selectors';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
    page = 0;

    feedPosts$ = this.store.select(selectFeedPosts);

    constructor(
        private feedService: FeedService,
        private store: Store<any>,
    ) { }

    ngOnInit() {
        this.getFeedPosts()
    }

    onScrollDown() {
        this.getFeedPosts();
    }

    onScrollUp() {
        console.log('UP')
    }

    getFeedPosts() {
        this.feedService.getAllFeedPosts().subscribe(() => { })
    }


}
