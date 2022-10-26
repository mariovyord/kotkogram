import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './core/user/user.service';
import { IUser } from './shared/interfaces/IUser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'kotkogram';
    constructor(private userService: UserService) { }
    user: Subscription;

    get loading() {
        return this.userService.loading;
    }

    ngOnInit() {
        // first load user if any
        const user = this.userService.loadUser().subscribe((user) => user)
    }
    ngOnDestroy(): void {
        this.user.unsubscribe();
    }
}
