import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './authentiction/sign-in/sign-in.component';
import { SignUpComponent } from './authentiction/sign-up/sign-up.component';
import { AuthGuard } from './core/guards/auth.guard';
import { PostDetailsModalComponent } from './post-details-modal/post-details-modal.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: 'details/:id', component: PostDetailsModalComponent }
        ],
        title: 'Kotkogram - Home'
    },
    {
        path: 'feed', component: FeedComponent,
        children: [
            { path: 'details/:id', component: PostDetailsModalComponent }
        ],
        title: 'Kotkogram - Feed',
        canActivate: [AuthGuard],
        data: {
            authRequired: true,
            authFailureRedirectUrl: '/sign-in',
        }
    },
    {
        path: 'sign-in', component: SignInComponent,
        canActivate: [AuthGuard],
        title: 'Kotkogram - Sign In',
        data: {
            authRequired: false,
            authFailureRedirectUrl: '/',
        }
    },
    {
        path: 'sign-up', component: SignUpComponent,
        canActivate: [AuthGuard],
        title: 'Kotkogram - Sign Up',
        data: {
            authRequired: false,
            authFailureRedirectUrl: '/',
        }
    },
    {
        path: 'create', component: CreateComponent,
        canActivate: [AuthGuard],
        title: 'Kotkogram - Create',
        data: {
            authRequired: true,
            authFailureRedirectUrl: '/sign-in',
        }
    },
    {
        path: 'profile/:userId', component: ProfileComponent,
        children: [
            { path: 'details/:id', component: PostDetailsModalComponent }
        ],
        title: 'Kotkogram - Profile',
        canActivate: [AuthGuard],
        data: {
            authRequired: true,
            authFailureRedirectUrl: '/sign-in',
        }
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
