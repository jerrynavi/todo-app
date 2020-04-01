import { createReducer, createAction } from '@reduxjs/toolkit';
import { state } from '../state';
import { Todo } from '../../interfaces/todo.interface';
import { randomBytes } from 'crypto';
import moment from 'moment';

interface EditingTodo {
    id: string;
    todo: Todo;
}

export const todoReducer = createReducer(state.todos, {
    ADD_TODO: (todos, { payload }: { payload: Partial<Todo> }) => {
        const now = moment();
        const id = randomBytes(2).toString('hex') + '_' + now.valueOf();
        const todosSlice = todos.slice();
        todosSlice.push({
            ...payload,
            id,
            isDone: false,
        } as Todo);
        todos = todosSlice;
        return todos;
    },
    EDIT_TODO: (todos, { payload }: { payload: EditingTodo }) => {
        const todosSlice = todos.slice();
        const { id, todo } = payload;
        const { id: todoId, ...rest } = todo;
        const todoToEdit = todosSlice.findIndex((t) => t.id === id);
        if (todoToEdit !== -1) {
            todosSlice.splice(todoToEdit, 1, {
                ...rest,
                id,
            });
            todos = todosSlice;
        }
        return todos;
    },
    DELETE_TODO: (todos, { payload }: { payload: string }) => {
        const todosSlice = todos.slice();
        const todoToDelete = todosSlice.findIndex((t) => t.id === payload);
        if (todoToDelete !== -1) {
            todosSlice.splice(todoToDelete, 1);
            todos = todosSlice;
        }
        return todos;
    },
});

createAction('ADD_TODO');
createAction('EDIT_TODO');
createAction('DELETE_TODO');
