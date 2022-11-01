import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IComment } from 'src/app/shared/interfaces/IComment';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
})
export class CommentComponent {
    @Input() comment: IComment;
    @Output() redirect = new EventEmitter()

    constructor() { }


}
