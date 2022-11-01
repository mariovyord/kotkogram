import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterModule } from '@angular/router';

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
    ],
    exports: [
        ProfileComponent,
    ]
})
export class ProfileModule { }
