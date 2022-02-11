import { Subject } from 'rxjs';

const subject = new Subject<{ text: string } | undefined>();

export const messageService = {
    sendMessage: (message: string) => subject.next({ text: message }),
    clearMessages: () => subject.next(undefined),
    onMessage: () => subject.asObservable(),
};
