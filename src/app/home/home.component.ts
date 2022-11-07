import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as homeFeature from './store/reducers';
import * as homeActions from "./store/actions";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    posts$ = this.store.select(homeFeature.selectAllPosts);

    constructor(
        private store: Store<any>,
    ) { }

    ngOnInit() {
        this.store.dispatch(homeActions.loadPosts())
    }

    onScrollDown() {
        this.store.dispatch(homeActions.loadPosts())
    }

    onScrollUp() {
        console.log('UP')
    }
}
