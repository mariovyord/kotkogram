import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/IPost';

@Component({
    selector: 'app-feed-card',
    templateUrl: './feed-card.component.html',
})
export class FeedCardComponent {
    @Input() post: IPost;
    constructor() { }
}
