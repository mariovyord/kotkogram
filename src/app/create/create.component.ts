import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IUser } from '../shared/interfaces/IUser';
import { PostsService } from '../shared/posts/posts.service';
import { SnackbarService } from '../shared/snackbar/snackbar.service';
import { selectUser } from '../store/selectors';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnDestroy {
    @ViewChild('f') form: NgForm;

    user: IUser;
    userSub$: Subscription;

    constructor(private snackbarService: SnackbarService,
        private userPostsService: PostsService,
        private router: Router,
        private store: Store<any>,
    ) {
        this.userSub$ = this.store.select(selectUser).subscribe(user => this.user = user!);
    }

    ngOnDestroy(): void {
        this.userSub$.unsubscribe();
    }

    onSubmit() {
        const { imageUrl, description } = this.form.value;

        this.userPostsService.createPost(imageUrl, description).subscribe({
            next: () => {
                this.snackbarService.openSnackBar('Picture posted successfully!')
                this.router.navigateByUrl(`/profile/${this.user._id}`);
            },
            error: res => {
                this.snackbarService.openSnackBar(res.error.errors[0])
            }
        })
    }


}
