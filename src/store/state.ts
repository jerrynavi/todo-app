import { State } from '../interfaces/state.interface';

export const state: State = {
    todos: [],
    app: {
        shouldSaveOffline: true,
        isProcessing: false,
    },
};