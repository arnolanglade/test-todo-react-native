/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {
  act, render, renderHook, screen, waitFor,
} from '@testing-library/react-native';
import App, { TodoStatus, useTodoList } from './App';

// Note: test renderer must be required after react-native.

const aTodoList = () => [{
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

it('renders correctly', () => {
  const todolist = renderHook(() => useTodoList());

  expect(todolist.result.current.todoList).toEqual(aTodoList());
});

it('return correct label', () => {
  render(<App />);

  expect(screen.getByText('label')).toBeTruthy();
});
