/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  render, screen,
} from '@testing-library/react-native';
import TodoListScreen from './TodoListScreen';
import { container } from '../../app/ContainerContext';
import { createWrapper } from '../../app/testing/WrapperUtils';
import { createNavigationMock, createRouteParams } from '../../app/testing/NavigationUtils';

it('renders the todo list with a item', () => {
  render(
    <TodoListScreen navigation={createNavigationMock<'TodoList'>()} route={createRouteParams<'TodoList'>('TodoList', undefined)} />,
    { wrapper: createWrapper(container) },
  );

  expect(screen.getByText('label')).toBeTruthy();
  expect(screen.getByText('Todo List')).toBeTruthy();
});
