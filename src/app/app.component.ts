import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from './shared/user/user.service';
import { loadUser } from './store/actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
        private userService: UserService,
        private store: Store,
    ) { }

    get loading() {
        return this.userService.loading;
    }

    ngOnInit() {
        // first load user if any
        this.store.dispatch(loadUser());
    }
}
