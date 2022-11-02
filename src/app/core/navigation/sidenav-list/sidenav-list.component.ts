import { Component, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
    selector: 'app-sidenav-list',
    templateUrl: './sidenav-list.component.html',
})
export class SidenavListComponent {
    @Output() sidenavClose = new EventEmitter();

    get isAuthenticated() {
        return Boolean(this.userService.user);
    }

    get user() {
        return this.userService.user;
    }

    constructor(private userService: UserService) { }

    onSidenavClose() {
        this.sidenavClose.emit();
    }

    onSignOut() {
        this.userService.signOut().subscribe(() => { });
    }
}
