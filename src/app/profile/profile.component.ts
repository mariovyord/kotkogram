import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/interfaces/IPost';
import { posts } from 'src/mocks/posts';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    posts: IPost[] = posts;
    constructor() { }

    ngOnInit(): void {
    }

}
