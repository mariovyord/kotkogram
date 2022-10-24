import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/interfaces/IPost';

@Component({
    selector: 'app-square-card',
    templateUrl: './square-card.component.html',
    styleUrls: ['./square-card.component.css']
})
export class SquareCardComponent {
    @Input() post: IPost;
}
