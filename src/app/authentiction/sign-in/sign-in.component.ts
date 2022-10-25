import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
    @ViewChild('f') form: NgForm;

    constructor(private userService: UserService, private router: Router) { }

    onFormSubmit() {
        const { username, password } = this.form.value;
        this.userService.signIn(username, password).subscribe({
            next: res => {
                this.router.navigateByUrl('/');
            },
            error: res => {
                console.log(res);
            }
        })
    }

}
