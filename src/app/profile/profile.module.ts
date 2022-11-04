import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterModule } from '@angular/router';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { ProfileService } from './service/profile.service';

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileHeaderComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
        InfiniteScrollModule,
        RouterModule,
        StoreModule.forFeature('profile', reducers),
    ],
    exports: [
        ProfileComponent,
    ],
    providers: [
        ProfileService,
    ]
})
export class ProfileModule { }
