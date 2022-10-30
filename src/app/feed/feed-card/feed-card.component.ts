import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/core/posts/posts.service';
import { UserService } from 'src/app/core/user/user.service';
import { IPost } from 'src/app/shared/interfaces/IPost';

@Component({
    selector: 'app-feed-card',
    templateUrl: './feed-card.component.html',
    styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent {
    @Input() post: IPost;

    get user() {
        return this.userService.user;
    }

    constructor(private postsService: PostsService, private userService: UserService) { }

    onLike() {
        this.postsService.likePost(this.post._id).subscribe({
            next: () => {
                const userId = this.user?._id!;

                // TODO update likes in service
                if (this.post.likes.includes(userId)) {
                    const index = this.post.likes.indexOf(userId);
                    this.post.likes.splice(index, 1);
                } else {
                    this.post.likes.push(userId);
                }
            },
            error: () => {
                // TODO...
            }
        })
    }
}
