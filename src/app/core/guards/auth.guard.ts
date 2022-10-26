import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private userService: UserService) { }

    get user() {
        return this.userService.user;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const { authRequired, authFailureRedirectUrl } = route.data;

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
                this.router.navigateByUrl('/');
                return false;
            }
        }))
    }
}


