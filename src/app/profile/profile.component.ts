import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserPostsCount, selectProfilePosts, selectActivatedUser } from './store/profile.feature';
import * as profileActions from './store/profile.actions';
import { ProfileService } from './service/profile.service';
import { selectUser } from '../store/user.selectors';
import { map, tap } from 'rxjs';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
    activatedUserId: string;

    activatedUser$ = this.store.select(selectActivatedUser);
    posts$ = this.store.select(selectProfilePosts);
    count$ = this.store.select(selectUserPostsCount);
    user$: any;

    constructor(
        private profileService: ProfileService,
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<any>,
    ) {
    }

    ngOnInit(): void {
        this.route.params
            .pipe(
                map(params => params['userId']),
                tap(id => {
                    this.activatedUserId = id
                    this.store.dispatch(profileActions.loadPosts({ activatedUserId: id }));
                    this.getUserPostsCount(id)
                    this.getUserData(id)
                })
            ).subscribe()
        this.user$ = this.store.select(selectUser).subscribe();
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
