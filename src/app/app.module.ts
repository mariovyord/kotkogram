import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { CoreModule } from './core/core.module';
import { AuthentictionModule } from './authentiction/authentiction.module';
import { ProfileModule } from './profile/profile.module';

import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { AppComponent } from './app.component';
import { FeedModule } from './feed/feed.module';
import { PostDetailsModalModule } from './post-details-modal/post-details-modal.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CreateComponent,
    ],
    imports: [
        BrowserModule,
        CoreModule,
        AppRoutingModule,
        SharedModule,
        MaterialModule,
        AuthentictionModule,
        ProfileModule,
        FeedModule,
        SharedModule,
        PostDetailsModalModule,
    ],
    entryComponents: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
