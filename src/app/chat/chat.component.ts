import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IUser } from '../shared/interfaces/IUser';
import { selectUser } from 'src/app/store/user.selectors';
import { ChatService } from './service/chat.service';
import { Subscription } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';

interface SendMessageObj {
    message: string,
    username: string,
    date?: string,
}

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css'],
    animations: [
        trigger('slideInState', [
            state('show', style({
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 10px 15px",
            })),
            state('hide', style({
                transform: 'translateY(999px)',
                height: 0,
            })),
            transition('show => hide',
                animate('400ms ease-out'),),
            transition('hide => show',
                animate('400ms ease-out')),
        ])
    ]
})
export class ChatComponent implements OnInit {
    @ViewChild('f') form: NgForm;
    messageList: SendMessageObj[] = [];

    showChat = false;
    user: IUser | null | undefined;
    userSub$: Subscription;

    get stateName() {
        return this.showChat ? 'show' : 'hide';
    }

    constructor(
        private chatService: ChatService,
        private store: Store<any>,
    ) { }

    ngOnInit() {
        this.userSub$ = this.store.select(selectUser).subscribe(user => this.user = user!);

        this.chatService.getNewMessage().subscribe((message: SendMessageObj | null) => {
            if (message && message.message) {
                this.messageList.unshift(message);
            }
        })
    }

    sendMessage() {
        const { message } = this.form.value;
        this.chatService.sendMessage({
            username: this.user!.username,
            date: new Date().toLocaleString(),
            message,
        });
        this.form.reset();
        this.form.controls['message'].setErrors(null);
    }
}

