import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareCardComponent } from './cards-grid/square-card/square-card.component';
import { CardsGridComponent } from './cards-grid/cards-grid.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { CardsGridLoadingComponent } from './cards-grid/cards-grid-loading/cards-grid-loading.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        CardsGridComponent,
        SquareCardComponent,
        CardsGridLoadingComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        MaterialModule,
        RouterModule,
    ],
    providers: [
    ],
    exports: [
        CardsGridComponent,
        SquareCardComponent,
        CardsGridLoadingComponent,
    ]
})
export class SharedModule { }
