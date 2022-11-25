import { createContext } from 'react';
import { TodoItem, TodoList } from '../domain/TodoList';
import { queryTodoList, queryTodoItem } from '../service/QueryTodoList';

export type ServiceContainer = undefined | {
  queryTodoList: () => TodoList,
  queryTodoItem: (id:number) => TodoItem
};

export const ContainerContext = createContext<ServiceContainer>(undefined);
export const container = { queryTodoList, queryTodoItem };
