import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { PostsService } from '../core/posts/posts.service';
import { UserService } from '../core/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from '../shared/interfaces/IUser';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    posts: IPost[] = [];
    userPostsCount = 0;
    page = 0;
    activatedUserId: string | undefined = undefined;
    userData: IUser | undefined = undefined;

    get user() {
        return this.userService.user;
    }

    constructor(
        private postsService: PostsService,
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        this.activatedUserId = this.route.snapshot.params['userId']

        if (this.activatedUserId) {
            this.getAllUserPosts(this.activatedUserId);
            this.getUserPostsCount(this.activatedUserId);
            this.getUserData(this.activatedUserId);
        } else if (this.user) {
            this.getAllUserPosts(this.user._id);
            this.getUserPostsCount(this.user._id);
            this.getUserData(this.user._id);
        } else {
            this.router.navigateByUrl('/');
        }
    }

    ngOnInit(): void {
    }

    onScrollUp() {
        console.log('SCROLL UP')
    }

    onScrollDown() {
        this.getAllUserPosts(this.activatedUserId || this.user!._id);
    }

    getAllUserPosts(userId: string) {
        this.postsService.getUserPosts(userId, ++this.page)
            .subscribe(res => {
                if (res.data && res.data.length > 0) {
                    res.data.forEach(post => {
                        this.posts.push(post);
                    })
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
