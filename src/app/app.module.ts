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
import { NotFoundComponent } from './not-found/not-found.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [
        AppComponent,
        CreateComponent,
        NotFoundComponent,
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
        StoreModule.forRoot({
            state: appReducer,
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([]),
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
