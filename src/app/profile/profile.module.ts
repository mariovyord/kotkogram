import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterModule } from '@angular/router';
import { profileReducers } from './store/profile.reducers';
import { StoreModule } from '@ngrx/store';
import { ProfileService } from './service/profile.service';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileHeaderComponent,
        SettingsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
        InfiniteScrollModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forFeature('profile', profileReducers),
    ],
    exports: [
        ProfileComponent,
    ],
    providers: [
        ProfileService,
    ]
})
export class ProfileModule { }
