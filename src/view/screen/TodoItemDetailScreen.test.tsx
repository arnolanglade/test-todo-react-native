import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import TodoItemDetailScreen from './TodoItemDetailScreen';
import { container } from '../../app/ContainerContext';
import { createWrapper } from '../../app/TestUtils';
import { createNavigationMock, createRouteParams } from '../../app/testing/NavigationUtils';

it('renders the todo item details', async () => {
  render(
    <TodoItemDetailScreen
      route={createRouteParams<'Item'>('Item', { id: 2 })}
      navigation={createNavigationMock<'Item'>()}
    />,
    { wrapper: createWrapper(container) },
  );

  await waitFor(() => expect(screen.getByText('label')).toBeTruthy());
  await waitFor(() => expect(screen.getByText('2')).toBeTruthy());
});
