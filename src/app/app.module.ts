import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { FeedComponent } from './feed/feed.component';
import { SquareCardComponent } from './cards/square-card/square-card.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidenavListComponent,
        HomeComponent,
        ProfileComponent,
        CreateComponent,
        FeedComponent,
        SquareCardComponent,
        PostDetailsComponent,
        ModalContainerComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        MatTooltipModule,
        MatTableModule,
        DragDropModule,
        MatDialogModule,
        MatProgressSpinnerModule,
    ],
    entryComponents: [
        PostDetailsComponent,
        ModalContainerComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
