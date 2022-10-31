import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './post-details/post-details.component';
import { MaterialModule } from '../material.module';
import { PostDetailsModalComponent } from './post-details-modal.component';
import { CommentComponent } from './post-details/comment/comment.component';
import { FormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './post-details/delete-dialog/delete-dialog.component';
import { DialogModule } from '@angular/cdk/dialog';

@NgModule({
    declarations: [
        PostDetailsComponent,
        PostDetailsModalComponent,
        CommentComponent,
        DeleteDialogComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        DialogModule,
    ],
    exports: [
        PostDetailsModalComponent,
    ]
})
export class PostDetailsModalModule { }
