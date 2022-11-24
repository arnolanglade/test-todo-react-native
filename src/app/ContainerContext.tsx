import { createContext } from 'react';
import { TodoList } from '../domain/TodoList';
import { queryTodoList, queryTodoItem } from '../service/QueryTodoList';

export const ContainerContext = createContext<{ queryTodoList:() => TodoList }>({ queryTodoList: () => [] });
export const container = { queryTodoList, queryTodoItem };
