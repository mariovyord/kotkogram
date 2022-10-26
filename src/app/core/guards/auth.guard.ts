import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    private isLoggedIn: boolean = false;

    constructor(private router: Router, private userService: UserService) { }

    get user() {
        return this.userService.user;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const { authRequired } = route.data;

        if (authRequired === Boolean(this.user)) {
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
                this.router.navigateByUrl('/sign-up');
                return false;
            }
        }))
    }
}


// canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

//     const { authRequired, authFailureRedirectUrl } = route.data;

//     this.userService.user.subscribe(x => this.isLoggedIn = Boolean(x));

//     if (authRequired === this.isLoggedIn) {
//         return true;
//     }

//     let authRedirectUrl = authFailureRedirectUrl;

//     if (authRequired) {
//         const loginRedirectUrl = route.url.reduce((acc, x) => `${acc}/${x.path}`, '');
//         authRedirectUrl += `?redirectUrl=${loginRedirectUrl}`;
//     }

//     return this.router.parseUrl(authRedirectUrl || '/');
// }
