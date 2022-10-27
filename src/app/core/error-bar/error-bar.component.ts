import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
    selector: 'app-error-bar',
    templateUrl: './error-bar.component.html',
    styleUrls: ['./error-bar.component.css']
})
export class ErrorBarComponent {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}
