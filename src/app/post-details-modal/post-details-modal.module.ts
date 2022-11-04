import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './post-details/post-details.component';
import { MaterialModule } from '../material.module';
import { CommentComponent } from './post-details/comment/comment.component';
import { FormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './post-details/delete-dialog/delete-dialog.component';
import { DialogModule } from '@angular/cdk/dialog';
import { RouterModule } from '@angular/router';
import { PostDetailsModalComponent } from './post-details-modal.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { DetailsService } from './service/details.service';

@NgModule({
    declarations: [
        PostDetailsComponent,
        CommentComponent,
        DeleteDialogComponent,
        PostDetailsModalComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        DialogModule,
        RouterModule,
        StoreModule.forFeature('details', reducers),
    ],
    exports: [
        PostDetailsComponent,
        PostDetailsModalComponent,
    ],
    providers: [
        DetailsService,
    ]
})
export class PostDetailsModalModule { }
