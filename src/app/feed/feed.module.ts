import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { FeedComponent } from './feed.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FeedService } from './service/feed.service';
import { feedFeature } from './store/feed.feature';
import { StoreModule } from '@ngrx/store';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EffectsModule } from '@ngrx/effects';
import { FeedEffects } from './store/feed.effects';
import { FeedLoadingComponent } from './feed-loading/feed-loading.component';

@NgModule({
    declarations: [
        FeedCardComponent,
        FeedComponent,
        FeedLoadingComponent,
    ],
    imports: [
        CommonModule,
        InfiniteScrollModule,
        MaterialModule,
        RouterModule,
        StoreModule.forFeature(feedFeature),
        EffectsModule.forFeature([FeedEffects]),
    ],
    exports: [
        FeedComponent
    ],
    providers: [
        FeedService,
    ]
})
export class FeedModule { }
