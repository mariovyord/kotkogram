import { Injectable } from "@angular/core";
import { switchMap, takeUntil, catchError, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as homeActions from "./home.actions";
import { HomeService } from "../service/home.service";
import * as globalActions from '../../store/global.actions';

@Injectable()
export class PostsEffects {
    loadAllPosts$ = createEffect(() => this.actions$.pipe(
        ofType(homeActions.loadPosts),
        switchMap(
            () => this.homeService.getAllPosts()
                .pipe(
                    takeUntil(this.actions$.pipe(ofType(homeActions.loadPostsCancel))),
                    map(posts => homeActions.loadPostsSuccess({ posts })),
                    catchError(() => [homeActions.loadPostsFailure()])
                ),
        )
    ))

    reloadPosts$ = createEffect(() => this.actions$.pipe(
        ofType(globalActions.invalidateData),
        switchMap(
            () => this.homeService.getAllPosts(1)
                .pipe(
                    takeUntil(this.actions$.pipe(ofType(homeActions.loadPostsCancel))),
                    map(posts => homeActions.resetWithNewData({ posts })),
                    catchError(() => [homeActions.loadPostsFailure()])
                ),
        )
    ))

    constructor(
        private actions$: Actions,
        private homeService: HomeService,
    ) { }
}
