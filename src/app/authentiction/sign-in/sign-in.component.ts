import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { ErrorBarComponent } from '../error-bar/error-bar.component';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
    @ViewChild('f') form: NgForm;

    error: string;
    durationInSeconds = 6;
    hide = true;

    constructor(private _snackBar: MatSnackBar, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

    onFormSubmit() {
        const { username, password } = this.form.value;
        this.userService.signIn(username, password).subscribe({
            next: res => {
                const redirectUrl = this.activatedRoute.snapshot.queryParams['redirectUrl'] || '/';
                this.router.navigateByUrl(redirectUrl);
            },
            error: res => {
                this.error = res.error.errors[0];
                this.openSnackBar()
            }
        })
    }

    openSnackBar() {
        this._snackBar.openFromComponent(ErrorBarComponent, {
            duration: this.durationInSeconds * 1000,
            announcementMessage: this.error,
            data: this.error,

        });
    }
}
