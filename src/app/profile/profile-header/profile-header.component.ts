import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/IUser';

@Component({
    selector: 'app-profile-header',
    templateUrl: './profile-header.component.html',
})
export class ProfileHeaderComponent implements OnInit {
    @Input() user!: IUser;
    @Input() userPostsCount!: number;

    constructor() { }

    ngOnInit(): void {
        console.log(this.user)
    }

}
