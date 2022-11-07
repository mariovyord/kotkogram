import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cards-grid-loading',
    templateUrl: './cards-grid-loading.component.html',
    styleUrls: ['./cards-grid-loading.component.css']
})
export class CardsGridLoadingComponent implements OnInit {
    cards = Array(12).fill('');

    constructor() { }

    ngOnInit(): void {
    }

}
