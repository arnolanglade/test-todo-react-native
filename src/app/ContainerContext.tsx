import { createContext } from 'react';
import { TodoItem, TodoList } from '../domain/TodoList';
import { queryTodoList, queryTodoItem } from '../service/QueryTodoList';

export type ServiceContainer = { queryTodoList: () => TodoList, queryTodoItem: (id:number) => TodoItem };
export const ContainerContext = createContext<ServiceContainer>({ queryTodoList: () => [], queryTodoItem: (id:number) => {} });
export const container = { queryTodoList, queryTodoItem };
