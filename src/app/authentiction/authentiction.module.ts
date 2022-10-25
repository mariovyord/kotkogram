import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
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
