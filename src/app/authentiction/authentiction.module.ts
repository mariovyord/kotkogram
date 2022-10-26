import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ErrorBarComponent } from './error-bar/error-bar.component';
import { SameValueDirective } from './sign-up/same-value.directive';
import { PasswordMatchDirective } from './sign-up/password-match.directive';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
        ErrorBarComponent,
        SameValueDirective,
        PasswordMatchDirective,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        FormsModule,
    ],
    providers: [
    ]
})
export class AuthentictionModule { }
