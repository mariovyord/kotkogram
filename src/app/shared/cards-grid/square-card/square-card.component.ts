import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/shared/posts/posts.service';
import { UserService } from 'src/app/shared/user/user.service';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { selectUser } from 'src/app/store/user.selectors';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-square-card',
    templateUrl: './square-card.component.html',
    styleUrls: ['./square-card.component.css']
})
export class SquareCardComponent {
    @Input() post: IPost;

    user$ = this.store.select(selectUser);

    constructor(private store: Store<any>) { }

}
