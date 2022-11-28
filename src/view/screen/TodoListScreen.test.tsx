/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react-native';
import TodoListScreen from './TodoListScreen';
import { createWrapper } from '../../app/testing/WrapperUtils';
import { createNavigationMock, createRouteParams } from '../../app/testing/NavigationUtils';
import { aTodoList } from '../../usecase/UseTodoList.test';

it('renders the todo list with a item', async () => {
  render(
    <TodoListScreen navigation={createNavigationMock<'TodoList'>()} route={createRouteParams<'TodoList'>('TodoList', undefined)} />,
    { wrapper: createWrapper({ queryTodoList: () => Promise.resolve(aTodoList()) }, { todoListTitle: 'Todo List' }) },
  );

  await waitFor(() => expect(screen.getByText('label')).toBeTruthy());
  expect(screen.getByText('Todo List')).toBeTruthy();
});
