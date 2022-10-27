import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorBarComponent } from './error-bar/error-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
        ErrorBarComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    providers: [
    ]
})
export class AuthentictionModule { }
