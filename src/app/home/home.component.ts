import { Component, OnInit } from '@angular/core';
import { posts } from 'src/mocks/posts';
import { IPost } from '../../interfaces/IPost';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    posts: IPost[] = posts;

    constructor() { }

    ngOnInit(): void {
    }

}
