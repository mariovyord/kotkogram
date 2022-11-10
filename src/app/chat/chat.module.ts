import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BubbleComponent } from './bubble/bubble.component';

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
    ],
    // providers: [
    //     ChatService,
    // ],
    exports: [
        ChatComponent,
    ]
})
export class ChatModule { }
