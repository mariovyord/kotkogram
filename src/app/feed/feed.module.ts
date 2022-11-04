import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { FeedComponent } from './feed.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FeedService } from './service/feed.service';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [
        FeedCardComponent,
        FeedComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        StoreModule.forFeature('feed', reducers),
    ],
    exports: [
        FeedComponent
    ],
    providers: [
        FeedService,
    ]
})
export class FeedModule { }
