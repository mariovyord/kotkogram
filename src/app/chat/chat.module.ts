import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BubbleComponent } from './bubble/bubble.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        ChatComponent,
        BubbleComponent
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
    ],
    // providers: [
    //     ChatService,
    // ],
    exports: [
        ChatComponent,
    ]
})
export class ChatModule { }
