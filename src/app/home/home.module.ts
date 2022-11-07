import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { HomeService } from './service/home.service';
import { homeFeature } from './store/home.feature';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/home.effects';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        InfiniteScrollModule,
        SharedModule,
        RouterModule,
        StoreModule.forFeature(homeFeature),
        EffectsModule.forFeature([PostsEffects]),
    ],
    exports: [
        HomeComponent,
    ],
    providers: [
        HomeService,
    ]
})
export class HomeModule { }
