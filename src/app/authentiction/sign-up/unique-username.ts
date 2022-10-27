import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { UserService } from "src/app/core/user/user.service";
import { map, catchError, of } from 'rxjs';

export class CustomAsyncValidator {
    static isUsernameUnique(userService: UserService): AsyncValidatorFn {
        return (control: AbstractControl) => {
            return userService.isUsernameUnique(control.value).pipe(map(res => {
                return null
            }), catchError(() => {
                control.setErrors({ 'unique': true })
                return of({ 'unique': true })
            }
            ))
        };
    }
}
