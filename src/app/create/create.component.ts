import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ErrorBarComponent } from '../core/error-bar/error-bar.component';
import { UserPostsService } from '../core/posts/user-posts.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent {
    @ViewChild('f') form: NgForm;
    message: string;
    durationInSeconds = 6;

    constructor(private userPostsService: UserPostsService, private _snackBar: MatSnackBar, private router: Router) { }

    onSubmit() {
        const { imageUrl, description } = this.form.value;

        this.userPostsService.createPost(imageUrl, description).subscribe({
            next: res => {
                this.message = 'Picture posted successfully!'
                this.openSnackBar()
                this.router.navigateByUrl('/profile');
            },
            error: res => {
                this.message = res.error.errors[0];
                this.openSnackBar()
            }
        })
    }

    openSnackBar() {
        this._snackBar.openFromComponent(ErrorBarComponent, {
            duration: this.durationInSeconds * 1000,
            announcementMessage: this.message,
            data: this.message,
        });
    }
}
