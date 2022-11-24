import { createContext } from 'react';
import { TodoList } from '../domain/TodoList';

export const ContainerContext = createContext<{ queryTodoList:() => TodoList }>({ queryTodoList: () => [] });
