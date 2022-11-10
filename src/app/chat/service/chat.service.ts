import { Injectable } from '@angular/core';
import { OnInitEffects } from '@ngrx/effects';
import { BehaviorSubject } from 'rxjs';
import { io } from "socket.io-client";

const SOCKET_URL = 'http://localhost:5000/socket/message';

interface MessageObj {
    message: string,
    username: string,
    date: string,
}

@Injectable({
    providedIn: 'root',
})
export class ChatService {
    message$ = new BehaviorSubject<MessageObj | null>(null);

    socket = io(SOCKET_URL, {
        transports: ['websocket', 'polling'],
        withCredentials: true,
    });

    sendMessage(messageObj: MessageObj) {
        this.socket.emit('message', messageObj);
    }

    getNewMessage = () => {
        this.socket.on('message', (message) => {
            this.message$.next(message);
        });

        return this.message$.asObservable();
    };
}
