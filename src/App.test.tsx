/**
 * @format
 */

import 'react-native';
import React, { ReactNode } from 'react';
import renderer from 'react-test-renderer';
import {
  act, render, renderHook, screen, waitFor,
} from '@testing-library/react-native';
import App, {
  ContainerContext, TodoList, TodoStatus, useTodoList,
} from './App';

// Note: test renderer must be required after react-native.

const aTodoList = () : TodoList => [{
  id: 1,
  label: 'label',
  description: 'description',
  status: TodoStatus.TODO,
  assignee: {
    name: 'Dupond',
    firstname: 'Henri',
    // eslint-disable-next-line global-require
    image: require('../asset/images/portrait-homme-blanc-isole_53876-40306.webp'),
  },
}];

const emptyList = () : TodoList => [];

it('should return empty list', () => {
  function Wrapper({ children }: { children: ReactNode }) {
    return <ContainerContext.Provider value={{ queryTodoList: emptyList }}>{children}</ContainerContext.Provider>;
  }
  const todolist = renderHook(() => useTodoList(), { wrapper: Wrapper });

  expect(todolist.result.current.todoList).toEqual(emptyList());
});

it('should return todo items', () => {
  function Wrapper({ children }: { children: ReactNode }) {
    return <ContainerContext.Provider value={{ queryTodoList: aTodoList }}>{children}</ContainerContext.Provider>;
  }
  const todolist = renderHook(() => useTodoList(), { wrapper: Wrapper });

  expect(todolist.result.current.todoList).toEqual(aTodoList());
});

it('return correct label', () => {
  render(<App />);

  expect(screen.getByText('label')).toBeTruthy();
});
