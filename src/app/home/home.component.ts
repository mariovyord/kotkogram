import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';
import { Store } from '@ngrx/store';
import { selectAllPosts } from './store/selectors';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    posts$ = this.store.select(selectAllPosts);

    constructor(
        private postsService: HomeService,
        private store: Store<any>,
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
        this.postsService.getAllPosts().subscribe(() => { })
    }
}
