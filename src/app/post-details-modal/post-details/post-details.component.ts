import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PostsService } from 'src/app/core/posts/posts.service';
import { IPost } from 'src/app/shared/interfaces/IPost';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
    @Input() postId: string;
    panelOpenState: boolean = false;
    post: IPost;

    constructor(
        public dialogRef: MatDialogRef<PostDetailsComponent>,
        public postsService: PostsService,
    ) { }

    ngOnInit(): void {
        const currentPost = this.postsService.getOnePost(this.postId)

        if (currentPost === undefined) { return console.log('Oh, well...') }

        this.post = currentPost;

    }
    togglePanel(): void {
        this.panelOpenState = !this.panelOpenState;
    }
}
