import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/shared/user/user.service';
import { selectIsAuth, selectUser } from 'src/app/store/user.selectors';

@Component({
    selector: 'app-sidenav-list',
    templateUrl: './sidenav-list.component.html',
})
export class SidenavListComponent {
    @Output() sidenavClose = new EventEmitter();

    isAuth$ = this.store.select(selectIsAuth);
    user$ = this.store.select(selectUser);

    constructor(
        private userService: UserService,
        private store: Store<any>
    ) { }

    onSidenavClose() {
        this.sidenavClose.emit();
    }

    onSignOut() {
        this.userService.signOut().subscribe(() => { });
    }
}
