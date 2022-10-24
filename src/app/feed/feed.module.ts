import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { FeedComponent } from './feed.component';
import { MaterialModule } from '../material.module';

@NgModule({
    declarations: [
        FeedCardComponent,
        FeedComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: []
})
export class FeedModule { }
