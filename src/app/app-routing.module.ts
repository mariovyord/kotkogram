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
        path: '', component: HomeComponent, children: [
            { path: 'details/:id', component: PostDetailsModalComponent }
        ]
    },
    {
        path: 'feed', children: [
            { path: '', component: FeedComponent, },
        ],
        canActivate: [AuthGuard],
        data: {
            authRequired: true,
            authFailureRedirectUrl: '/sign-in',
        }
    },
    {
        path: 'sign-in', component: SignInComponent,
        canActivate: [AuthGuard],
        data: {
            authRequired: false,
            authFailureRedirectUrl: '/',
        }
    },
    {
        path: 'sign-up', component: SignUpComponent,
        canActivate: [AuthGuard],
        data: {
            authRequired: false,
            authFailureRedirectUrl: '/',
        }
    },
    {
        path: 'create', component: CreateComponent,
        canActivate: [AuthGuard],
        data: {
            authRequired: true,
            authFailureRedirectUrl: '/sign-in',
        }
    },
    {
        path: 'profile', children: [
            { path: '', component: ProfileComponent },
            { path: ':userId', component: ProfileComponent },
            { path: ':userId/details/:id', component: PostDetailsModalComponent }
        ],
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
