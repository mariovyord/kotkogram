import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PostDetailsComponent } from '../post-details/post-details.component';

@Component({
    selector: 'app-modal-container',
    template: '',
})
export class ModalContainerComponent implements OnDestroy {
    destroy = new Subject<any>();
    subscribtion: Subscription;

    constructor(public dialog: MatDialog,
        route: ActivatedRoute,
        router: Router
    ) {
        route.url.pipe(takeUntil(this.destroy)).subscribe(params => {
            // When router navigates on this component is takes the params and opens up the modal
            const path = params[0].path;
            const id = params[1].path;

            const currentDialog = this.dialog.open(this.getComponent(path));
            currentDialog.componentInstance.postId = id;

            // Go back to home page after the modal is closed
            currentDialog.afterClosed().subscribe(() => router.navigateByUrl('/'));
        })
    }
    ngOnDestroy() {
        this.destroy.next(null);
    }
    getComponent(path: string) {
        switch (path) {
            case 'post': return PostDetailsComponent;
            default: throw new Error('Path not found');
        }
    }
}
