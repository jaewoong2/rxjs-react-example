import { Subject } from 'rxjs';
import { gameInfoType } from 'src/types';

const subject = new Subject<gameInfoType>();

export const gameService = {
    clickAnswer: (prev: gameInfoType) => subject.next({ stage: prev.stage + 1, point: ((prev.stage ** 3) * prev.time) + prev.point, time: 15 }),
    clickWrong: (prev: gameInfoType) => subject.next({ ...prev, time: prev.time - 3 }),
    deletTime: (prev: gameInfoType) => subject.next({ ...prev, time: prev.time - 1 }),
    pullGameInfo: (state: gameInfoType) => subject.next({ ...state }),
    reset: () => subject.next({ time: 15, stage: 1, point: 0 }),
    onService: () => subject.asObservable(),
};
