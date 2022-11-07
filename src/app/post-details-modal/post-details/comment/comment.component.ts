import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IComment } from 'src/app/shared/interfaces/IComment';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { DetailsService } from '../../service/details.service';

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
}
