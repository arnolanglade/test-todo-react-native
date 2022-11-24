import { createContext } from 'react';
import { TodoList } from '../domain/TodoList';
import { queryTodoList } from '../service/QueryTodoList';

export const ContainerContext = createContext<{ queryTodoList:() => TodoList }>({ queryTodoList: () => [] });
export const container = { queryTodoList };
