import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';

@Component({
    selector: 'app-modal-container',
    template: '',
})
export class PostDetailsModalComponent {
    postId: string;

    constructor(
        public dialog: MatDialog,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.postId = this.route.snapshot.params['id'];
        this.openDialog();
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(PostDetailsComponent, {
            data: {
                postId: this.postId
            },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(result => {
            this.router.navigate(['../../'], { relativeTo: this.route });
        });
    }
}
