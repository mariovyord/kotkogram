import { Component } from '@angular/core';
import { posts } from 'src/mocks/posts';
import { IPost } from '../shared/interfaces/IPost';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    posts: IPost[] = posts;

    constructor(
        public dialog: MatDialog
    ) { }
}
