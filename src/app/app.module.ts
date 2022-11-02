import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { CoreModule } from './core/core.module';
import { ProfileModule } from './profile/profile.module';

import { CreateComponent } from './create/create.component';
import { AppComponent } from './app.component';
import { FeedModule } from './feed/feed.module';
import { PostDetailsModalModule } from './post-details-modal/post-details-modal.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        CreateComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        AppRoutingModule,
        SharedModule,
        MaterialModule,
        ProfileModule,
        FeedModule,
        PostDetailsModalModule,
        HttpClientModule,
        FormsModule,
        HomeModule,
    ],
    entryComponents: [],
    providers: [
        // {
        //     provide: APP_INITIALIZER,
        //     useFactory: initializeApp,
        //     deps: [UserService],
        //     multi: true
        // }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

// function initializeApp(userService: UserService) {
//     return () => userService.loadUser().subscribe(() => { })
// }
