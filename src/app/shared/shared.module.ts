import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareCardComponent } from './cards-grid/square-card/square-card.component';
import { CardsGridComponent } from './cards-grid/cards-grid.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        CardsGridComponent,
        SquareCardComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
    ],
    providers: [
    ],
    exports: [
        CardsGridComponent,
        SquareCardComponent,
    ]
})
export class SharedModule { }
