import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/shared/posts/posts.service';
import { UserService } from 'src/app/shared/user/user.service';
import { IPost } from 'src/app/shared/interfaces/IPost';

@Component({
    selector: 'app-square-card',
    templateUrl: './square-card.component.html',
    styleUrls: ['./square-card.component.css']
})
export class SquareCardComponent {
    @Input() post: IPost;

    get user() {
        return this.userService.user;
    }

    constructor(private userService: UserService, private router: Router) { }

}
