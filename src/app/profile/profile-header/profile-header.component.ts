import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/IUser';

@Component({
    selector: 'app-profile-header',
    templateUrl: './profile-header.component.html',
    styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {
    @Input() user!: IUser;
    constructor() { }

    ngOnInit(): void {
    }

}
