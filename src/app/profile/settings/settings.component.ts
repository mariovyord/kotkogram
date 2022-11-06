import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { selectUser } from 'src/app/store/selectors';
import { editableUser, ProfileService } from '../service/profile.service';
import { PasswordAsyncValidator } from './correct-password';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {
    hide = true;
    hideOld = true;

    user: IUser;
    userSub$: Subscription;

    constructor(
        public snackbarService: SnackbarService,
        private profileService: ProfileService,
        private router: Router,
        private store: Store<any>
    ) { }

    ngOnInit(): void {
        this.userSub$ = this.store.select(selectUser).subscribe(user => {
            this.user = user!;

            this.dataForm.setValue({
                firstName: user!.firstName as string,
                lastName: user!.lastName as string,
                description: user!.description as string,
                imageUrl: user!.imageUrl as string,
            })
        });
    }

    ngOnDestroy(): void {
        this.userSub$.unsubscribe();
    }

    dataForm = new FormGroup({
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
    });

    passwordForm = new FormGroup({
        oldPassword: new FormControl('', {
            validators: [
                Validators.required,
            ],
            asyncValidators: [
                PasswordAsyncValidator.isPasswordCorrect(this.profileService)
            ],
            updateOn: 'blur'
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
    }, { validators: this.passwordMatch('password', 'rePassword') });


    onDataFormSubmit() {
        const values = this.dataForm.value as editableUser;

        this.profileService.editUser(values).subscribe({
            next: () => {
                this.snackbarService.openSnackBar('Edit successfull!');
                this.router.navigateByUrl(`/profile/${this.user._id}`);
            },
            error: (res) => {
                console.log(res)
                this.snackbarService.openSnackBar(res.error.errors[0]);
            }
        })
    }

    onPasswordFormSubmit() {
        const values = this.passwordForm.value;

        this.profileService.changePassword(values.oldPassword as string, values.password as string).subscribe({
            next: () => {
                this.snackbarService.openSnackBar('Password change successfull!');
                this.router.navigateByUrl(`/profile/${this.user._id}`);
            },
            error: res => {
                this.snackbarService.openSnackBar(res.error.errors[0]);
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
