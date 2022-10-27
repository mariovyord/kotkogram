import { Component, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    hide = true;

    signUpForm = new FormGroup({
        username: new FormControl('', {
            validators: [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(280),
            ]
        }),
        firstName: new FormControl('', {
            validators: [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(280),
            ]
        }),
        lastName: new FormControl('', {
            validators: [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(280),
            ]
        }),
        imageUrl: new FormControl(''),
        description: new FormControl('', {
            validators: [
                Validators.maxLength(280),
            ]
        }),
        password: new FormControl('', {
            validators: [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(60),
            ]
        }),
        rePassword: new FormControl('', {
            validators: [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(60),
            ]
        }),
        confirm: new FormControl(false, {
            validators: [
                Validators.requiredTrue
            ]
        }),
    }, { validators: this.passwordMatch('password', 'rePassword') });

    constructor(private userService: UserService, private router: Router) { }

    // TODO Add custom validator for blacklisted chars
    // TODO validation for existing username

    onFormSubmit() {
        const values = this.signUpForm.value;

        this.userService.signUp(values).subscribe({
            next: res => {
                this.router.navigateByUrl('/');
            },
            error: res => {
                console.log(res);
            }
        })
    }

    passwordMatch(password: string, rePassword: string) {
        return (formGroup: AbstractControl): ValidationErrors | null => {
            const passwordControl = formGroup.get(password);
            const confirmPasswordControl = formGroup.get(rePassword);

            if (passwordControl?.value === '' || confirmPasswordControl?.value === '') {
                return null;
            }

            if (passwordControl?.value !== confirmPasswordControl?.value) {
                confirmPasswordControl?.setErrors({ passwordMismatch: true });
                return { passwordMismatch: true };
            } else {
                confirmPasswordControl?.setErrors(null);
                return null;
            }
        };
    }
}



