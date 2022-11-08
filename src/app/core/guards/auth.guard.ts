import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { UserService } from 'src/app/shared/user/user.service';
import { selectUser } from 'src/app/store/user.selectors';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private userService: UserService,
        private store: Store<any>
    ) { }

    user$ = this.store.select(selectUser);

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const { authRequired, authFailureRedirectUrl } = route.data;

        if (authRequired === Boolean(this.user$)) {
            return true;
        } else if (authRequired === false) {
            return this.router.navigateByUrl('/');
        } else {
            return this.checkUserAccess();
        }
    }

    checkUserAccess() {
        return this.userService.loadUser().pipe(map(user => {
            if (user) {
                return true;
            } else {
                this.router.navigateByUrl('/');
                return false;
            }
        }))
    }
}


