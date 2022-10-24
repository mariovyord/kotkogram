import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'feed', component: FeedComponent, },
    { path: 'create', component: CreateComponent, },
    {
        path: 'profile', children: [
            { path: '', component: ProfileComponent, },
            { path: ':userId', component: ProfileComponent, },
            {
                path: 'post/:id',
                component: ModalContainerComponent,
                outlet: 'm'
            },
        ]
    },
    {
        path: 'post/:id',
        component: ModalContainerComponent,
        outlet: 'm'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
