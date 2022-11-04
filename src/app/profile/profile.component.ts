import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { PostsService } from '../shared/posts/posts.service';
import { UserService } from '../shared/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../shared/interfaces/IUser';
import { Store } from '@ngrx/store';
import { selectUser } from '../store/selectors';
import { selectProfilePosts } from './store/selectors';
import * as profileActions from './store/actions';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
    posts: IPost[] = [];
    userPostsCount = 0;
    page = 0;
    activatedUserId: string;
    userData: IUser | undefined = undefined;

    user$ = this.store.select(selectUser);
    posts$ = this.store.select(selectProfilePosts);

    constructor(
        private postsService: PostsService,
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<any>,
    ) {
        this.activatedUserId = this.route.snapshot.params['userId']
    }

    ngOnInit(): void {
        this.getAllUserPosts(this.activatedUserId!)
        this.getUserPostsCount(this.activatedUserId!)
        this.getUserData(this.activatedUserId!)
    }

    onScrollUp() {
        console.log('SCROLL UP')
    }

    onScrollDown() {
        this.getAllUserPosts(this.activatedUserId);
    }

    getAllUserPosts(userId: string) {
        this.postsService.getUserPosts(userId, ++this.page)
            .subscribe(res => {
                if (res.data) {
                    this.store.dispatch(profileActions.loadPosts({ posts: res.data }))
                }
            })
    }

    getUserPostsCount(userId: string) {
        this.postsService.getUserPostsCount(userId)
            .subscribe(res => {
                if (typeof res.data === 'number') {
                    this.userPostsCount = res.data;
                }
            })
    }

    getUserData(userId: string) {
        this.userService.getUserData(userId)
            .subscribe({
                next: (res) => {
                    this.userData = res.data;
                },
                error: () => {
                    this.router.navigateByUrl('/');
                }
            })
    }
}
