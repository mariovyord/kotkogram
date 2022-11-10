import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketsService } from './service/websockets.service';
import { ChatComponent } from './chat.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        ChatComponent
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
    ],
    providers: [
        WebsocketsService,
    ],
    exports: [
        ChatComponent,
    ]
})
export class ChatModule { }
