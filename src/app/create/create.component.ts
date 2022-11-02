import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostsService } from '../shared/posts/posts.service';
import { SnackbarService } from '../shared/snackbar/snackbar.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent {
    @ViewChild('f') form: NgForm;

    constructor(private snackbarService: SnackbarService, private userPostsService: PostsService, private _snackBar: MatSnackBar, private router: Router) { }

    onSubmit() {
        const { imageUrl, description } = this.form.value;

        this.userPostsService.createPost(imageUrl, description).subscribe({
            next: res => {
                this.snackbarService.openSnackBar('Picture posted successfully!')
                this.router.navigateByUrl('/profile');
            },
            error: res => {
                this.snackbarService.openSnackBar(res.error.errors[0])
            }
        })
    }


}
