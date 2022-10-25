import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isAuthenticated = false;
    user: Subscription;

    @Output() public sidenavToggle = new EventEmitter();

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.user = this.userService.user.subscribe(user => {
            this.isAuthenticated = user ? true : false;
        })
    }

    onSignOut() {
        this.userService.signOut().subscribe(() => { });
    }

    public onToggleSidenav() {
        this.sidenavToggle.emit();
    }
}
