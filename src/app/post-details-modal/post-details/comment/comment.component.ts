import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/shared/interfaces/IComment';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
})
export class CommentComponent implements OnInit {
    @Input() comment: IComment;

    constructor() { }

    ngOnInit(): void {
    }

}
