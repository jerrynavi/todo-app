import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { todoReducer } from './reducers/todoReducer';
import { storage } from './middlewares/storage';
import storageModule from 'store2';
import { state } from './state';
import { STORE_NAME } from '../utils';
import { appReducer } from './reducers/appReducer';

// load app state from localStorage if it exists
const preloadedState = (storageModule.has(STORE_NAME)) ? storageModule.get(STORE_NAME) : state;

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        app: appReducer,
    },
    middleware: [...getDefaultMiddleware(), storage as any],
    preloadedState
});