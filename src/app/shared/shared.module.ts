import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareCardComponent } from './square-card/square-card.component';
import { CardsGridComponent } from './cards-grid/cards-grid.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { UserService } from './user/user.service';
import { PostsService } from './posts/posts.service';
import { CommentsService } from './comments/comments.service';


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
