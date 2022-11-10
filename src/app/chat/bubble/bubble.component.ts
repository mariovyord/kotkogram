import { Component, Input, ViewChild, ElementRef } from '@angular/core';

interface SendMessageObj {
    message: string,
    username: string,
    date?: string,
}

@Component({
    selector: 'app-bubble',
    templateUrl: './bubble.component.html',
    styleUrls: ['./bubble.component.css']
})
export class BubbleComponent {
    @Input() messageList: SendMessageObj[] = [];
    @ViewChild('scrollMe') scrollMe: ElementRef;
}
