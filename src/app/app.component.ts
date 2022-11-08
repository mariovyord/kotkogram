import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUser } from './store/user.actions';
import { selectUser } from './store/user.selectors';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
        private store: Store<any>,
    ) { }

    user$ = this.store.select(selectUser);

    ngOnInit() {
        // first load user if any
        this.store.dispatch(loadUser());
    }
}
