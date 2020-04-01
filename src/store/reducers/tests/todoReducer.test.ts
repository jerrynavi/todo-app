import { todoReducer } from '../todoReducer';
import { actions } from '../../../utils';
import { Todo } from '../../../interfaces/todo.interface';

const mockState: Todo[] = [
    {
        id: '123456',
        title: 'Default task',
        isDone: false,
    },
];

it('should add TODO', () => {
    expect(
        todoReducer(mockState, {
            type: actions.ADD_TODO,
            payload: {
                title: 'Complete a task',
            },
        })
    ).toHaveLength(2);
});

it('should delete TODO', () => {
    expect(
        todoReducer(mockState, {
            type: actions.DELETE_TODO,
            payload: '123456',
        })
    ).toHaveLength(0);
});

it('should change TODO to done', () => {
    expect(
        todoReducer(mockState, {
            type: actions.EDIT_TODO,
            payload: {
                id: '123456',
                todo: {
                    id: '123456',
                    title: 'Default task',
                    isDone: true,
                }
            }
        })
    ).toEqual([
        {
            id: '123456',
            title: 'Default task',
            isDone: true,
        }
    ]);
});
