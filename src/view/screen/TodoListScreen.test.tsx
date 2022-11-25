/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  render, screen,
} from '@testing-library/react-native';
import TodoListScreen from './TodoListScreen';
import { container, ContainerContext } from '../../app/ContainerContext';
import TodoItemDetailScreen from './TodoItemDetailScreen';
import { createWrapper } from '../../app/TestUtils';

it('renders the todo list with a item', () => {
  render(
    <TodoListScreen />,
    { wrapper: createWrapper(container) },
  );

  expect(screen.getByText('label')).toBeTruthy();
});
