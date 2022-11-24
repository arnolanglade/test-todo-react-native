import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import TodoItemDetailScreen from './TodoItemDetailScreen';
import { container, ContainerContext } from '../../app/ContainerContext';

it('renders the todo item details', async () => {
  render((
    <ContainerContext.Provider value={container}>
      <TodoItemDetailScreen />
    </ContainerContext.Provider>
  ));

  await waitFor(() => expect(screen.getByText('label')).toBeTruthy());
});
