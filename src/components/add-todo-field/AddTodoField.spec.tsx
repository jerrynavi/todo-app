import React from 'react';
import { shallow } from 'enzyme';
import AddTodoField from './AddTodoField';

test('Add Todo Field mounts without errors', () => {
    shallow(<AddTodoField />);
});
