import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { PostDetailsModalComponent } from './post-details-modal/post-details-modal.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './authentiction/sign-in/sign-in.component';
import { SignUpComponent } from './authentiction/sign-up/sign-up.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'feed', children: [
            { path: '', component: FeedComponent, },

            {
                path: 'post/:id',
                component: PostDetailsModalComponent,
                outlet: 'm'
            },
        ]
    },
    { path: 'sign-in', component: SignInComponent, },
    { path: 'sign-up', component: SignUpComponent, },
    { path: 'create', component: CreateComponent, },
    {
        path: 'profile', children: [
            { path: '', component: ProfileComponent, },
            { path: ':userId', component: ProfileComponent, },
            {
                path: 'post/:id',
                component: PostDetailsModalComponent,
                outlet: 'm'
            },
        ]
    },
    {
        path: 'post/:id',
        component: PostDetailsModalComponent,
        outlet: 'm'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
