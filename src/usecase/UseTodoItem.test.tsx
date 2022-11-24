/**
 * @format
 */

import 'react-native';
import React, { ReactNode } from 'react';
import { renderHook } from '@testing-library/react-native';
import { TodoItem, TodoStatus } from '../domain/TodoList';
import { ContainerContext } from '../app/ContainerContext';
import { useTodoItem } from './UseTodoItem';
import { container } from '../app/TestUtils';

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
  function Wrapper({ children }: { children: ReactNode }) {
    return <ContainerContext.Provider value={container({ queryTodoItem: aTodoItem })}>{children}</ContainerContext.Provider>;
  }
  const todolist = renderHook(() => useTodoItem(), { wrapper: Wrapper });

  expect(todolist.result.current.todoItem).toEqual(aTodoItem());
});