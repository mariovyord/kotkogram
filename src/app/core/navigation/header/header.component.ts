import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/user/user.service';
import { selectIsAuth, selectUser } from '../../../store/user.selectors';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {

    isAuth$ = this.store.select(selectIsAuth);
    user$ = this.store.select(selectUser);

    @Output() public sidenavToggle = new EventEmitter();

    constructor(
        private userService: UserService,
        private store: Store<any>,
    ) { }

    onSignOut() {
        this.userService.signOut().subscribe(() => { });
    }

    public onToggleSidenav() {
        this.sidenavToggle.emit();
    }
}
