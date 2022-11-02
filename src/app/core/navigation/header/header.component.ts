import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    get isAuthenticated() {
        return Boolean(this.userService.user);
    }

    get user() {
        return this.userService.user;
    }

    @Output() public sidenavToggle = new EventEmitter();

    constructor(private userService: UserService) { }

    onSignOut() {
        this.userService.signOut().subscribe(() => { });
    }

    public onToggleSidenav() {
        this.sidenavToggle.emit();
    }
}
