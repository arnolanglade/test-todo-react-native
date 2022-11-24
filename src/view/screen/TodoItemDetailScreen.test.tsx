import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import TodoItemDetailScreen from './TodoItemDetailScreen';

it('renders the todo item details', () => {
  render(<TodoItemDetailScreen />);

  waitFor(() => expect(screen.getByText('label')).toBeTruthy());
});
