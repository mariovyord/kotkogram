import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PostsService } from '../core/posts/posts.service';
import { IPost } from '../shared/interfaces/IPost';
import { PostDetailsComponent } from './post-details/post-details.component';

@Component({
    selector: 'app-modal-container',
    template: '',
})
export class PostDetailsModalComponent implements OnDestroy {
    destroy = new Subject<any>();
    subscribtion: Subscription;
    post: IPost;

    constructor(public dialog: MatDialog,
        route: ActivatedRoute,
        router: Router,
    ) {
        route.url.pipe(takeUntil(this.destroy)).subscribe(params => {
            // When router navigates on this component is takes the params and opens up the modal
            const id = params[1].path;
            const currentDialog = this.dialog.open(PostDetailsComponent);
            currentDialog.componentInstance.postId = id;

            const pattern = /\/\(.+\)/
            const parentUrl = router.url.replace(pattern, '');
            // Go back to home page after the modal is closed
            currentDialog.componentInstance.modal_principal_parent.subscribe(() => {
                currentDialog.componentInstance.modal_principal_parent.unsubscribe();
                currentDialog.close();
            });

            currentDialog.afterClosed().subscribe(() => router.navigateByUrl(parentUrl));
        })
    }

    ngOnDestroy() {
        this.destroy.next(null);
    }
}
