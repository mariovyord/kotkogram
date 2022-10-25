import { Component, OnInit } from '@angular/core';
import { UserService } from './core/user/user.service';
import { IUser } from './shared/interfaces/IUser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'kotkogram';
    constructor(private userService: UserService) { }

    ngOnInit() {
        // first load user if any
        this.userService.loadUser();
    }
}
