import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { CommentsService } from 'src/app/core/comments/comments.service';
import { IComment } from 'src/app/shared/interfaces/IComment';
import { PostsService } from 'src/app/core/posts/posts.service';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { NgForm } from '@angular/forms';
import { tap } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
    postId: string;
    @Output() modal_principal_parent = new EventEmitter();

    panelOpenState: boolean = false;
    post: IPost;
    comments: IComment[] = []
    isFollowLoading = false;

    constructor(
        private postsService: PostsService,
        private commentsService: CommentsService,
        private userService: UserService,
        private dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.postId = data.postId;
    }

    get user() {
        return this.userService.user;
    }

    ngOnInit(): void {
        this.postsService.getOnePost(this.postId).subscribe(res => {
            if (res === undefined) {
                // TODO...
                throw new Error()
            }
            // TODO Add loading and error handling
            this.post = res;
        })

        this.commentsService.getComments(this.postId).subscribe({
            next: (res) => {
                if (res.data === undefined) { throw new Error() }

                this.comments = res.data
            },
            error: (res) => { console.log(res.error) }
        })
    }

    togglePanel(): void {
        this.panelOpenState = !this.panelOpenState;
    }

    onSubmit(f: NgForm) {
        this.commentsService.postComment(f.value.comment, this.postId).pipe(tap(res => {
            if (res.data !== undefined) {
                res.data.owner = this.user!;
                this.comments.unshift(res.data);
                f.reset();
                f.controls['comment'].setErrors(null);
                this.panelOpenState = false;
            }
        })).subscribe({
            error: res => {
                // TODO...
                console.log('error', res.errors);
            }
        })
    }

    onLike() {
        this.postsService.likePost(this.postId).subscribe({
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

    onFollow(ownerId: string): void {
        if (this.user === undefined) return;
        this.isFollowLoading = true;

        this.userService.followUser(ownerId).pipe(tap(() => {
            const userIndex = this.user!.following.indexOf(ownerId)

            if (userIndex === -1) {
                this.user!.following.push(ownerId)
            } else {
                this.user!.following.splice(userIndex, 1);
            }
        })).subscribe(() => {
            this.isFollowLoading = false;
        })
    }

    openDialog() {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '250px',
        });

        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.postsService.deletePost(this.post._id).subscribe({
                    next: () => {
                        this.modal_principal_parent.emit();
                    },
                    error: () => { }
                })
            }
        });
    }

    forceCloseDialog(routerLink: string) {
        this.modal_principal_parent.emit(`/profile/${routerLink}`);
    }
}
