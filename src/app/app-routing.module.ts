import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './core/guards/auth.guard';
import { PostDetailsModalComponent } from './post-details-modal/post-details-modal.component';
import { NotFoundComponent } from './notFound/not-found/not-found.component';

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
        path: 'auth',
        loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
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
    {
        path: '**', component: NotFoundComponent,
        title: 'Kotkogram - Not Found',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    preloadStrategy: PreloadAllModules;
}
