import React, { ReactNode } from 'react';
import { ContainerContext, ServiceContainer } from './ContainerContext';

export const container = (services: Partial<ServiceContainer>): ServiceContainer => ({
  queryTodoList: jest.fn(),
  queryTodoItem: jest.fn(),
  ...services,
});

export const createWrapper = (serviceContainer: Partial<ServiceContainer>) => function Wrapper(
  { children }: { children: ReactNode },
) {
  return (
    <ContainerContext.Provider value={container(serviceContainer)}>
      {children}
    </ContainerContext.Provider>
  );
};
