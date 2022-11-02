import { Component, Input } from '@angular/core';
import { PostsService } from 'src/app/shared/posts/posts.service';
import { UserService } from 'src/app/shared/user/user.service';
import { IPost } from 'src/app/shared/interfaces/IPost';

@Component({
    selector: 'app-feed-card',
    templateUrl: './feed-card.component.html',
})
export class FeedCardComponent {
    @Input() post: IPost;

    get user() {
        return this.userService.user;
    }

    constructor(private userService: UserService) { }
}
