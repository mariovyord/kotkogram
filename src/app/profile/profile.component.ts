import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { PostsService } from '../core/posts/posts.service';
import { UserService } from '../core/user/user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    posts: IPost[] = [];
    page = 0;

    get user() {
        return this.userService.user;
    }

    constructor(private postsService: PostsService, private userService: UserService) { }

    ngOnInit(): void {
        this.getAllUserPosts();
    }

    onScrollUp() {
        console.log('SCROLL UP')
    }

    onScrollDown() {
        this.getAllUserPosts()
    }

    getAllUserPosts() {
        this.postsService.getUserPosts(++this.page).subscribe(res => {
            if (res.data && res.data.length > 0) {
                res.data.forEach(post => {
                    this.posts.push(post);
                })
            }
        })
    }
}
