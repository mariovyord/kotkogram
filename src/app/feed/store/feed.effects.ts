import { Injectable } from "@angular/core";
import { switchMap, takeUntil, catchError, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as feedActions from "./feed.actions";
import { FeedService } from "../service/feed.service";

@Injectable()
export class FeedEffects {
    loadFeedPosts$ = createEffect(() => this.actions$.pipe(
        ofType(feedActions.loadPosts),
        switchMap(
            () => this.feedService.getAllFeedPosts()
                .pipe(
                    takeUntil(this.actions$.pipe(ofType(feedActions.loadPostsCancel))),
                    map(posts => feedActions.loadPostsSuccess({ posts })),
                    catchError(() => [feedActions.loadPostsFailure()])
                ),
        )
    ))

    constructor(
        private actions$: Actions,
        private feedService: FeedService,
    ) { }
}
