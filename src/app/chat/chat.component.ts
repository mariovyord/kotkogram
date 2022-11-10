import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IUser } from '../shared/interfaces/IUser';
import { selectUser } from 'src/app/store/user.selectors';
import { ChatService } from './service/chat.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    @ViewChild('f') form: NgForm;

    showChat = false;
    messageList: string[] = [];
    user: IUser | null | undefined;
    userSub$: Subscription;

    constructor(
        private chatService: ChatService,
        private store: Store<any>,
    ) { }

    ngOnInit() {
        this.userSub$ = this.store.select(selectUser).subscribe(user => this.user = user!);

        this.chatService.getNewMessage().subscribe((message: string) => {
            this.messageList.push(message);
        })
    }

    sendMessage() {
        const { message } = this.form.value;
        this.chatService.sendMessage(`${this.user?.firstName || 'Anonymous'}: ${message}`);
        this.form.reset();
        this.form.controls['message'].setErrors(null);
    }
}
