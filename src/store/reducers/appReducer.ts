import { createReducer, createAction } from '@reduxjs/toolkit';
import { state } from '../state';

export const appReducer = createReducer(state.app, {
    TOGGLE_PROCESSING_STATE: (app) => {
        app.isProcessing = !app.isProcessing;
    },
    TOGGLE_OFFLINE_SAVE: (app) => {
        app.shouldSaveOffline = !app.shouldSaveOffline;
    },
});

createAction('TOGGLE_PROCESSING_STATE');
createAction('TOGGLE_OFFLINE_SAVE');
