import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { FeedComponent } from './feed.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        FeedCardComponent,
        FeedComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
    ],
    exports: []
})
export class FeedModule { }
