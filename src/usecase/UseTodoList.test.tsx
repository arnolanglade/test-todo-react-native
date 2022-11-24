/**
 * @format
 */

import 'react-native';
import React, { ReactNode } from 'react';
import {
  renderHook,
} from '@testing-library/react-native';
import { TodoList, TodoStatus } from '../domain/TodoList';
import { useTodoList } from './UseTodoList';
import { ContainerContext, ContainerType } from '../app/ContainerContext';

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

const container = (services:Partial<ContainerType>) : ContainerType => ({ queryTodoList: jest.fn(), queryTodoItem: jest.fn(), ...services });

it('should return empty list', () => {
  function Wrapper({ children }: { children: ReactNode }) {
    return <ContainerContext.Provider value={container({ queryTodoList: emptyList })}>{children}</ContainerContext.Provider>;
  }
  const todolist = renderHook(() => useTodoList(), { wrapper: Wrapper });

  expect(todolist.result.current.todoList).toEqual(emptyList());
});

it('should return todo items', () => {
  function Wrapper({ children }: { children: ReactNode }) {
    return <ContainerContext.Provider value={container({ queryTodoList: aTodoList })}>{children}</ContainerContext.Provider>;
  }
  const todolist = renderHook(() => useTodoList(), { wrapper: Wrapper });

  expect(todolist.result.current.todoList).toEqual(aTodoList());
});
