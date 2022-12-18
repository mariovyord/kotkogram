import { Injectable } from "@angular/core";
import { switchMap, takeUntil, catchError, map, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProfileService } from "../service/profile.service";
import * as profileActions from "./profile.actions";
import * as globalActions from '../../store/global.actions';

@Injectable()
export class ProfileEffects {
    loadAllPosts$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.loadPosts),
        switchMap(
            (action) => this.profileService.getUserPosts(action.activatedUserId)
                .pipe(
                    takeUntil(this.actions$.pipe(ofType(profileActions.loadPostsCancel))),
                    map(posts => profileActions.loadPostsSuccess({ posts })),
                    catchError((err) => {
                        console.log(err)
                        return [profileActions.loadPostsFailure()]
                    })
                ),
        )
    ))

    reloadPosts$ = createEffect(() => this.actions$.pipe(
        ofType(globalActions.invalidateData),
        switchMap(
            () => this.profileService.getUserPosts(undefined, 1)
                .pipe(
                    takeUntil(this.actions$.pipe(ofType(profileActions.loadPostsCancel))),
                    map(posts => profileActions.resetWithNewData({ posts })),
                    catchError(() => [profileActions.loadPostsFailure()])
                ),
        )
    ))

    constructor(
        private actions$: Actions,
        private profileService: ProfileService,
    ) { }
}
