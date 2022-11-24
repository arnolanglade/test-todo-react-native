/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  render, screen,
} from '@testing-library/react-native';
import App from './App';

it('renders the todo list with a item', () => {
  render(<App />);

  expect(screen.getByText('label')).toBeTruthy();
});
