/*
    Middleware to save state to localStorage after every dispatch.
    You can replace with your own storage method within the `Promise.resovle()` method
*/

import storageModule from 'store2';
import { STORE_NAME } from '../../utils/';
import { State } from '../../interfaces/state.interface';

const saveState = (state: State): void => {
    const prevState: State = storageModule.has(STORE_NAME)
        ? storageModule.get(STORE_NAME) : null;

    if (prevState
        && Object.prototype.hasOwnProperty.call(prevState, 'app')
        && prevState.app.shouldSaveOffline === false
        && state.app.shouldSaveOffline === prevState.app.shouldSaveOffline
    ) {
        return;
    }
    storageModule.set(STORE_NAME, state);
};

export const storage = (store: any) => (next: any) => (action: any): any => {
    const result = next(action);
    Promise.resolve(saveState(store.getState()));
    return result;
};