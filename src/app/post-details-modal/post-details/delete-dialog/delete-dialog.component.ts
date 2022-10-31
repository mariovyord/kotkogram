import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-delete-dialog',
    templateUrl: './delete-dialog.component.html',
    styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {

    constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>) { }

    submitUserReason(): void {
        this.dialogRef.close(true);
    }
}
