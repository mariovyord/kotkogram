import { Component } from '@angular/core';
import { UserService } from './shared/user/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'kotkogram';
    constructor(private userService: UserService) { }

    get loading() {
        return this.userService.loading;
    }

    ngOnInit() {
        // first load user if any
        this.userService.loadUser().subscribe(() => { })
    }
}
