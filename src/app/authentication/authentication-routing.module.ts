import { RouterModule } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const authRoutes = [
    {
        path: 'sign-in',
        component: SignInComponent,
        title: 'Kotkogram - Sign In',
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
        title: 'Kotkogram - Sign Up',
    },
];

export const AuthenticationRoutingModule = RouterModule.forChild(authRoutes);

