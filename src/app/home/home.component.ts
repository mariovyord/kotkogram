import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service/posts.service';
import { Store } from '@ngrx/store';
import { selectAllPosts } from './store/selectors';
import * as postsActions from './store/actions';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    page = 0;

    posts$ = this.store.select(selectAllPosts);

    constructor(
        private postsService: PostsService,
        private store: Store<any>,
    ) { }

    ngOnInit() {
        this.getAllPosts()
        console.log('hello', this.posts$)
    }

    onScrollDown() {
        this.getAllPosts();
    }

    onScrollUp() {
        console.log('UP')
    }

    getAllPosts() {
        this.page += 1;
        this.postsService.getAllPosts(this.page).subscribe((res) => {
            if (res.data) {
                this.store.dispatch(postsActions.loadPosts({ posts: res.data }))
            }
        })
    }
}
