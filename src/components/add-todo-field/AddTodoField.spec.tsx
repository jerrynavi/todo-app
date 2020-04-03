import React from 'react';
import { shallow } from 'enzyme';
import AddTodoField from './AddTodoField';
import { Provider } from 'react-redux';
import { store } from '../../store';

test('Add Todo Field mounts without errors', () => {
    shallow(
        <Provider store={store}>
            <AddTodoField />
        </Provider>,
    );
});
