import { useContext, useEffect, useState } from 'react';
import { ContainerContext } from '../app/ContainerContext';
import { TodoList } from '../domain/TodoList';

export const useTodoList = () => {
  const { queryTodoList, queryTodoItem } = useContext(ContainerContext);
  const [todoList, setTodoList] = useState<TodoList>([]);

  useEffect(() => {
    setTodoList(queryTodoList());
  }, []);

  const getTodoItem = (id:number) => queryTodoItem(id);

  return {
    todoList,
    getTodoItem,
  };
};
