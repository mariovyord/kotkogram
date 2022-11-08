import { Injectable } from "@angular/core";
import { switchMap, takeUntil, catchError, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadUser, loadUserCancel, loadUserFailure, loadUserSuccess } from "./user.actions";
import { UserService } from "../shared/user/user.service";

@Injectable()
export class UserEffects {
    loadUser = createEffect(() => this.actions$.pipe(
        ofType(loadUser),
        switchMap(
            () => this.userService.loadUser()
                .pipe(
                    takeUntil(this.actions$.pipe(ofType(loadUserCancel))),
                    map(user => loadUserSuccess(user)),
                    catchError(() => [loadUserFailure()])
                ),
        )
    ))

    constructor(
        private actions$: Actions,
        private userService: UserService,
    ) { }
}
