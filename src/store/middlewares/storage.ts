/*
    Middleware to save state to localStorage after every dispatch.
    You can replace with your own storage method within the `Promise.resovle()` method
*/

import storageModule from 'store2';
import { STORE_NAME } from '../../utils/';
import { EnhancedStore } from '@reduxjs/toolkit';
import { State } from '../../interfaces/state.interface';

const saveState = (state: State): void => {
    storageModule.set(STORE_NAME, state);
};

export const storage = (store: EnhancedStore<State>) => (next: any) => (action: any): any => {
    const result = next(action);
    Promise.resolve(() => {
        const state = store.getState();
        if (state.app.shouldSaveOffline) {
            saveState(state);
        }
    });
    return result;
};