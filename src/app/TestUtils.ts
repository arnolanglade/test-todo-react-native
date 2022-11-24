import { ServiceContainer } from './ContainerContext';

export const container = (services: Partial<ServiceContainer>): ServiceContainer => ({
  queryTodoList: jest.fn(),
  queryTodoItem: jest.fn(),
  ...services,
});
