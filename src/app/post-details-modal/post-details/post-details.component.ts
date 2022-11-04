import { Component, OnInit, Output, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { PostsService } from 'src/app/shared/posts/posts.service';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { NgForm } from '@angular/forms';
import { Subscription, tap } from 'rxjs';
import { UserService } from 'src/app/shared/user/user.service';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/store/selectors';
import { IUser } from 'src/app/shared/interfaces/IUser';
import * as userActions from '../../store/actions';
import { DetailsService } from '../service/details.service';
import { selectAllComments, selectPost } from '../store/selectors';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit, OnDestroy {
    postId: string;
    @Output() modal_principal_parent = new EventEmitter();

    panelOpenState: boolean = false;
    isFollowLoading = false;
    getUserData$: Subscription;
    user: IUser | null | undefined;

    post$ = this.store.select(selectPost);
    comments$ = this.store.select(selectAllComments);

    constructor(
        private detailsService: DetailsService,
        private userService: UserService,
        private dialog: MatDialog,
        private store: Store<any>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.postId = data.postId;
    }



    ngOnInit(): void {
        this.getUserData$ = this.store.select(selectUser).subscribe(user => {
            this.user = user
        });

        this.detailsService.getOnePost(this.postId).subscribe(() => { })
        this.detailsService.getComments(this.postId).subscribe(() => { })
    }

    ngOnDestroy(): void {
        this.getUserData$.unsubscribe();
    }

    togglePanel(): void {
        this.panelOpenState = !this.panelOpenState;
    }

    onSubmit(f: NgForm) {
        this.detailsService.postComment(f.value.comment, this.postId).pipe(tap(res => {
            if (res.data !== undefined) {
                res.data.owner = Object.assign({}, this.user);
                // this.comments.unshift(res.data);
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
        // if (this.user === undefined || this.user === null) return;

        // this.detailsService.likePost(this.postId).subscribe({
        //     next: () => {
        //         if (this.user === undefined || this.user === null) return;

        //         const userId = this.user._id!;

        //         // TODO update likes in service
        //         if (this.post.likes.includes(userId)) {
        //             const index = this.post.likes.indexOf(userId);
        //             this.post.likes.splice(index, 1);
        //         } else {
        //             this.post.likes.push(userId);
        //         }
        //     },
        //     error: () => {
        //         // TODO...
        //     }
        // })
    }

    onFollow(ownerId: string): void {
        if (this.user === undefined || this.user === null) return;

        this.isFollowLoading = true;

        this.userService.followUser(ownerId).pipe(tap(() => {
            if (this.user === undefined || this.user === null) return;

            this.store.dispatch(userActions.followUser({ followId: ownerId }))

        })).subscribe(() => {
            this.isFollowLoading = false;
        })
    }

    openDialog() {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '250px',
        });

        // dialogRef.afterClosed().subscribe(res => {
        //     if (res) {
        //         this.detailsService.deletePost(this.post._id).subscribe({
        //             next: () => {
        //                 this.modal_principal_parent.emit();
        //             },
        //             error: () => { }
        //         })
        //     }
        // });
    }

    forceCloseDialog(routerLink: string) {
        this.modal_principal_parent.emit(`/profile/${routerLink}`);
    }
}
