/**
 * @format
 */

import 'react-native';
import {
  renderHook, waitFor,
} from '@testing-library/react-native';
import { createWrapper } from '../app/testing/WrapperUtils';
import { TodoList, TodoStatus } from '../domain/TodoList';
import useTodoList from './UseTodoList';

export const aTodoList = () : TodoList => [{
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

it('should return empty list', async () => {
  const todolist = renderHook(
    () => useTodoList(),
    { wrapper: createWrapper({ queryTodoList: () => Promise.resolve(emptyList()) }) },
  );

  await waitFor(() => expect(todolist.result.current.todoList).toEqual(emptyList()));
});

it('should return todo items', async () => {
  const todolist = renderHook(
    () => useTodoList(),
    { wrapper: createWrapper({ queryTodoList: () => Promise.resolve(aTodoList()) }) },
  );

  await waitFor(() => expect(todolist.result.current.todoList).toEqual(aTodoList()));
});
