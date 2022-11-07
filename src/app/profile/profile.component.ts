import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { UserService } from '../shared/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../shared/interfaces/IUser';
import { Store } from '@ngrx/store';
import { selectPostsCount, selectProfilePosts, selectActivatedUser } from './store/profile.selectors';
import * as profileActions from './store/profile.actions';
import { ProfileService } from './service/profile.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
    activatedUserId: string;

    activatedUser$ = this.store.select(selectActivatedUser);
    posts$ = this.store.select(selectProfilePosts);
    count$ = this.store.select(selectPostsCount);

    constructor(
        private profileService: ProfileService,
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
        this.profileService.getUserPosts(userId)
            .subscribe(() => { })
    }

    getUserPostsCount(userId: string) {
        this.profileService.getUserPostsCount(userId)
            .subscribe(() => { })
    }

    getUserData(userId: string) {
        this.userService.getUserData(userId)
            .subscribe({
                next: (res) => {
                    if (res.data)
                        this.store.dispatch(profileActions.loadActivatedUser({ user: res.data }))
                },
                error: () => {
                    this.router.navigateByUrl('/');
                }
            })
    }
}
