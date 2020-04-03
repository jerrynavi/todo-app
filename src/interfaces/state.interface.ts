import { Todo } from './todo.interface';

export interface State {
    todos: Todo[];
    app: {
        shouldSaveOffline: boolean;
        isProcessing: boolean;
    };
}