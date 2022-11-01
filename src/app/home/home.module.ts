import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        InfiniteScrollModule,
        SharedModule,
        RouterModule,
    ],
    exports: [
        HomeComponent,
    ]
})
export class HomeModule { }
