import { Component, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
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
    hide = true;
    get password() {
        return this.form.value['password']
    }

    get rePassword() {
        return this.form.value['rePassword']
    }

    constructor(private userService: UserService, private router: Router) {
    }

    // TODO Add custom validator for blacklisted chars
    // TODO group password for validation

    onFormSubmit() {
        const values = this.form.value;
        console.log(this.form)
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
