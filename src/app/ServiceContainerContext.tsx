import { createContext, useContext } from 'react';
import { TodoItem, TodoList } from '../domain/TodoList';
import { queryTodoList, queryTodoItem } from '../service/QueryTodoList';

export type ServiceContainer = {
  queryTodoList: () => Promise<TodoList>,
  queryTodoItem: (id:number) => TodoItem
};

export const ServiceContainerContext = createContext<ServiceContainer>({} as ServiceContainer);

export const useServiceContainer = () => useContext(ServiceContainerContext);

export const container = { queryTodoList, queryTodoItem };
