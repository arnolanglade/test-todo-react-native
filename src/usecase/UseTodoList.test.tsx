/**
 * @format
 */

import 'react-native';
import {
  renderHook,
} from '@testing-library/react-native';
import { createWrapper } from '../app/TestUtils';
import { TodoList, TodoStatus } from '../domain/TodoList';
import { useTodoList } from './UseTodoList';

const aTodoList = () : TodoList => [{
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
}];

const emptyList = () : TodoList => [];

it('should return empty list', () => {
  const todolist = renderHook(
    () => useTodoList(),
    { wrapper: createWrapper({ queryTodoList: emptyList }) },
  );

  expect(todolist.result.current.todoList).toEqual(emptyList());
});

it('should return todo items', () => {
  const todolist = renderHook(
    () => useTodoList(),
    { wrapper: createWrapper({ queryTodoList: aTodoList }) },
  );

  expect(todolist.result.current.todoList).toEqual(aTodoList());
});
