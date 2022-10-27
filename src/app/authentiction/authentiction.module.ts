import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackbarComponent } from '../shared/snackbar/snackbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
        SnackbarComponent,
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
