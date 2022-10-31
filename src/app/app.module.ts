import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { CoreModule } from './core/core.module';
import { AuthentictionModule } from './authentiction/authentiction.module';
import { ProfileModule } from './profile/profile.module';
import { APP_INITIALIZER } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { AppComponent } from './app.component';
import { FeedModule } from './feed/feed.module';
import { PostDetailsModalModule } from './post-details-modal/post-details-modal.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './core/user/user.service';
import { HomeModule } from './home/home.module';

@NgModule({
    declarations: [
        AppComponent,
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
        PostDetailsModalModule,
        HttpClientModule,
        FormsModule,
        HomeModule,
    ],
    entryComponents: [],
    providers: [
        UserService,
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
