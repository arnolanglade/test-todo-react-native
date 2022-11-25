/**
 * @format
 */

import 'react-native';
import { renderHook } from '@testing-library/react-native';
import { TodoItem, TodoStatus } from '../domain/TodoList';
import { useTodoItem } from './UseTodoItem';
import { createWrapper } from '../app/testing/WrapperUtils';

const aTodoItem = () : TodoItem => ({
  id: 1,
  label: 'label',
  description: 'description',
  status: TodoStatus.TODO,
  assignee: {
    name: 'Dupond',
    firstname: 'Henri',
    // eslint-disable-next-line global-require
    image: require('../../asset/images/portrait-homme-blanc-isole_53876-40306.webp'),
  },
});

it('should return todo item details', () => {
  const todolist = renderHook(
    () => useTodoItem(1),
    { wrapper: createWrapper({ queryTodoItem: aTodoItem }) },
  );

  expect(todolist.result.current.todoItem).toEqual(aTodoItem());
});
