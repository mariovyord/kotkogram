import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { HomeService } from './service/home.service';
import { reducers } from './store/reducers';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        InfiniteScrollModule,
        SharedModule,
        RouterModule,
        StoreModule.forFeature('home', reducers)
    ],
    exports: [
        HomeComponent,
    ],
    providers: [
        HomeService,
    ]
})
export class HomeModule { }
