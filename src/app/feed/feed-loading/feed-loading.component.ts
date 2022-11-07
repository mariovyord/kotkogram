import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feed-loading',
    templateUrl: './feed-loading.component.html',
})
export class FeedLoadingComponent implements OnInit {
    posts = Array(4).fill('');
    constructor() { }

    ngOnInit(): void {
    }

}
