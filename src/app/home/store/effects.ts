import { Injectable } from "@angular/core";
import { switchMap, takeUntil, catchError, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as homeActions from "./actions";
import { HomeService } from "../service/home.service";

@Injectable()
export class PostsEffects {
    loadUser$ = createEffect(() => this.actions$.pipe(
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

    constructor(
        private actions$: Actions,
        private homeService: HomeService,
    ) { }
}
