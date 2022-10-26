import { Directive, Input } from '@angular/core';
import { AbstractControl, NgForm, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[appSameValue]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: SameValueDirective,
            multi: true,
        }
    ]
})
export class SameValueDirective implements Validator {
    @Input() appSameValue: string = ""

    constructor(private form: NgForm) { }

    validate(control: AbstractControl): ValidationErrors | null {
        const otherFieldValue = this.form.controls[this.appSameValue]?.value
        return control.value !== otherFieldValue
            ? {
                sameValue: true
            }
            : null;
    }

}



