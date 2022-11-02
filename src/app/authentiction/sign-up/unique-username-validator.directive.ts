import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { of, Observable, Subscription, map } from 'rxjs';
import { UserService } from 'src/app/shared/user/user.service';

@Directive({
    selector: '[appUniqueUsernameValidator]',
    providers: [{
        provide: NG_ASYNC_VALIDATORS,
        useExisting: UniqueUsernameValidatorDirective,
        multi: true
    }]
})
export class UniqueUsernameValidatorDirective implements AsyncValidator {
    constructor(private userService: UserService) { }

    validate(control: AbstractControl): Observable<ValidationErrors | null> {

        return this.userService.isUsernameUnique(control.value).pipe(map(res => {
            if (res) {
                control.setErrors({ 'unique': true })
                return { 'unique': true }
            } else {
                return null
            }
        }))

    }
}
