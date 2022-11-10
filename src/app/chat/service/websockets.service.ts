import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from "socket.io-client";

const SOCKET_URL = 'http://localhost:5000/socket/message';

@Injectable()
export class WebsocketsService {
    message$: BehaviorSubject<string> = new BehaviorSubject('');
    constructor() { }

    socket = io(SOCKET_URL);

    sendMessage(message: string) {
        this.socket.emit('message', message);
    }

    getNewMessage = () => {
        this.socket.on('message', (message) => {
            this.message$.next(message);
        });

        return this.message$.asObservable();
    };
}
