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

it('renders the todo list with a item', () => {
  render((
    <ContainerContext.Provider value={container}>
      <TodoListScreen />
    </ContainerContext.Provider>
  ));

  expect(screen.getByText('label')).toBeTruthy();
});
