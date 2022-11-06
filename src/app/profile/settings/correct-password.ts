import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map, catchError, of } from 'rxjs';
import { ProfileService } from "../service/profile.service";

export class PasswordAsyncValidator {
    static isPasswordCorrect(profileService: ProfileService): AsyncValidatorFn {
        return (control: AbstractControl) => {
            return profileService.isPasswordCorrect(control.value)
                .pipe(map(res => {
                    return null
                }), catchError(() => {
                    control.setErrors({ 'correct': true })
                    return of({ 'correct': true })
                }))
        };
    }
}
