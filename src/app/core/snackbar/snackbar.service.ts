import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {
    durationInSeconds = 6;

    constructor(private _snackBar: MatSnackBar) { }

    openSnackBar(message: string) {
        this._snackBar.openFromComponent(SnackbarComponent, {
            duration: this.durationInSeconds * 1000,
            announcementMessage: message,
            data: message,
        });
    }
}
