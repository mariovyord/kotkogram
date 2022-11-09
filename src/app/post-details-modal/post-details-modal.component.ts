import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';

@Component({
    selector: 'app-modal-container',
    template: ``,
})
export class PostDetailsModalComponent {
    postId: string;
    dialogRef: MatDialogRef<PostDetailsComponent, any>;
    redirectUrl = '../../';

    constructor(
        public dialog: MatDialog,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.postId = this.route.snapshot.params['id'];
        this.openDialog();

        this.dialogRef.componentInstance.modal_principal_parent.subscribe((url) => {
            if (url) {
                this.redirectUrl = url;
            }
            this.dialogRef.close();
        });
    }

    openDialog(): void {
        this.dialogRef = this.dialog.open(PostDetailsComponent, {
            data: {
                postId: this.postId
            },
            autoFocus: false
        });

        this.dialogRef.afterClosed().subscribe(() => {
            this.router.navigate([this.redirectUrl], { relativeTo: this.route });
        });
    }
}
