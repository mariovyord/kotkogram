import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'feed', component: FeedComponent, },
    { path: 'create', component: CreateComponent, },
    {
        path: 'profile', children: [
            { path: '', component: ProfileComponent, },
            { path: ':userId', component: ProfileComponent, },
        ]
    },
    {
        path: ':id',
        component: ModalContainerComponent,
        outlet: 'modal'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
