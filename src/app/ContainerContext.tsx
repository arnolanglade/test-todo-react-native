import { createContext } from 'react';
import { TodoItem, TodoList } from '../domain/TodoList';
import { queryTodoList, queryTodoItem } from '../service/QueryTodoList';

export type ContainerType = { queryTodoList: () => TodoList, queryTodoItem: () => TodoItem };
export const ContainerContext = createContext<ContainerType>({ queryTodoList: () => [], queryTodoItem: () => {} });
export const container = { queryTodoList, queryTodoItem };
