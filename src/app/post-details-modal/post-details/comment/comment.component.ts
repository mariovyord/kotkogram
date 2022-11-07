import { Component, Input, Output, EventEmitter, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IComment } from 'src/app/shared/interfaces/IComment';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { DetailsService } from '../../service/details.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
})
export class CommentComponent {
    @Input() comment: IComment;
    @Output() redirect = new EventEmitter()
    @ViewChild('f') editForm: NgForm;

    isEditing = false;
    isOwner = false;

    constructor(
        private detailsService: DetailsService,
        private snackbarService: SnackbarService,
        private dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }


    onSubmit() {
        this.isEditing = false;
        const { comment } = this.editForm.value;

        this.detailsService.editComment(this.comment._id, { body: comment }).subscribe({
            next: () => {
                this.snackbarService.openSnackBar('Comment edited successfully!')
            },
            error: res => {
                this.snackbarService.openSnackBar(res.error.errors[0])
            }
        })
    }

    openDialog() {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '250px',
        });

        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.detailsService.deleteComment(this.comment._id)
                    .subscribe({
                        next: () => {
                            this.snackbarService.openSnackBar('Comment deleted successfully!')
                        },
                        error: res => {
                            this.snackbarService.openSnackBar(res.error.errors[0])
                        }
                    })
            }
        });
    }
}
