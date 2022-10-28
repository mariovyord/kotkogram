import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './post-details/post-details.component';
import { MaterialModule } from '../material.module';
import { PostDetailsModalComponent } from './post-details-modal.component';
import { CommentComponent } from './post-details/comment/comment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        PostDetailsComponent,
        PostDetailsModalComponent,
        CommentComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
    ],
    exports: [
        PostDetailsModalComponent,
    ]
})
export class PostDetailsModalModule { }
