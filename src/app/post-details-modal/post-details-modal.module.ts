import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './post-details/post-details.component';
import { MaterialModule } from '../material.module';
import { PostDetailsModalComponent } from './post-details-modal.component';

@NgModule({
    declarations: [
        PostDetailsComponent,
        PostDetailsModalComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: [
        PostDetailsModalComponent,
    ]
})
export class PostDetailsModalModule { }
