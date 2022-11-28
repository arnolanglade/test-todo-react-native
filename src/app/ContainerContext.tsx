import { createContext } from 'react';
import { TodoItem, TodoList } from '../domain/TodoList';
import { queryTodoList, queryTodoItem } from '../service/QueryTodoList';

export type ServiceContainer = {
  queryTodoList: () => Promise<TodoList>,
  queryTodoItem: (id:number) => TodoItem
};

export const ContainerContext = createContext<ServiceContainer>({} as ServiceContainer);
export const container = { queryTodoList, queryTodoItem };
