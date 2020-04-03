import { createReducer, createAction } from '@reduxjs/toolkit';
import { state } from '../state';

export const appReducer = createReducer(state.app, {
    TOGGLE_PROCESSING_STATE: (app) => {
        app.isProcessing = !app.isProcessing;
    },
});

createAction('TOGGLE_PROCESSING_STATE');
