import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
    @Input() postId: string;
    panelOpenState: boolean = false;

    constructor(public dialogRef: MatDialogRef<PostDetailsComponent>) { }

    ngOnInit(): void {
    }

    togglePanel(): void {
        this.panelOpenState = !this.panelOpenState;
    }
}
