import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as feedActions from './store/feed.actions';
import { feedFeature } from './store/feed.feature';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
    page = 0;

    feedPosts$ = this.store.select(feedFeature.selectFeedPosts);
    isLoading$ = this.store.select(feedFeature.selectLoading);

    constructor(
        private store: Store<any>,
    ) { }

    ngOnInit() {
        this.store.dispatch(feedActions.loadPosts());
    }

    onScrollDown() {
        this.store.dispatch(feedActions.loadPosts());
    }

    onScrollUp() {
        console.log('UP')
    }
}
