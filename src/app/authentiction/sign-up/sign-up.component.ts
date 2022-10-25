import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    @ViewChild('f') form: NgForm;

    constructor(private userService: UserService, private router: Router) { }

    onFormSubmit() {
        const values = this.form.value;
        // TODO... validations

        this.userService.signUp(values).subscribe({
            next: res => {
                this.router.navigateByUrl('/');
            },
            error: res => {
                console.log(res);
            }
        })
    }
}
