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
import { createWrapper } from '../../app/TestUtils';
import { createNavigationMock, createRouteParams } from '../../app/testing/NavigationUtils';

it('renders the todo list with a item', () => {
  render(
    <TodoListScreen navigation={createNavigationMock<'Home'>()} route={createRouteParams<'Home'>('Home', undefined)} />,
    { wrapper: createWrapper(container) },
  );

  expect(screen.getByText('label')).toBeTruthy();
});
