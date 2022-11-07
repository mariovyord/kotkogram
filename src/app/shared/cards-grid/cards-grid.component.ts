import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/IPost';

@Component({
    selector: 'app-cards-grid',
    templateUrl: './cards-grid.component.html',
    styleUrls: ['./cards-grid.component.css']
})
export class CardsGridComponent implements OnInit {
    @Input() posts: IPost[];

    constructor() { }

    ngOnInit(): void {
    }

    trackByFunc(index: number, item: IPost) {
        if (!item) return null;
        return item._id;
    }

}
