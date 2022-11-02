import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { UserService } from 'src/app/shared/user/user.service';
import { SnackbarComponent } from '../../shared/snackbar/snackbar.component';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
    @ViewChild('f') form: NgForm;

    hide = true;

    constructor(private snackbarService: SnackbarService, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

    onFormSubmit() {
        const { username, password } = this.form.value;
        this.userService.signIn(username, password).subscribe({
            next: res => {
                this.snackbarService.openSnackBar('Sign in successfull!');
                const redirectUrl = this.activatedRoute.snapshot.queryParams['redirectUrl'] || '/';
                this.router.navigateByUrl(redirectUrl);
            },
            error: res => {
                this.snackbarService.openSnackBar(res.error.errors[0]);
            }
        })
    }
}
