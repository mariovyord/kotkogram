import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { posts } from 'src/mocks/posts';
import { IPost } from '../../interfaces/IPost';
import { MatDialog } from '@angular/material/dialog';
import { PostDetailsComponent } from '../post-details/post-details.component';

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
