import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
    @ViewChild('f') form: NgForm;

    constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

    onFormSubmit() {
        const { username, password } = this.form.value;
        this.userService.signIn(username, password).subscribe({
            next: res => {
                const redirectUrl = this.activatedRoute.snapshot.queryParams['redirectUrl'] || '/';
                this.router.navigateByUrl(redirectUrl);
            },
            error: res => {
                console.log(res);
            }
        })
    }

}
