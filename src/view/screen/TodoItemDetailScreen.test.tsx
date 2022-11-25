import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import TodoItemDetailScreen from './TodoItemDetailScreen';
import { container } from '../../app/ContainerContext';
import { createWrapper } from '../../app/TestUtils';

it('renders the todo item details', async () => {
  render(
    <TodoItemDetailScreen />,
    { wrapper: createWrapper(container) },
  );

  await waitFor(() => expect(screen.getByText('label')).toBeTruthy());
});
