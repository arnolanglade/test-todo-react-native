import { useContext, useEffect, useState } from 'react';
import { ContainerContext } from '../app/ContainerContext';
import { TodoItem } from '../domain/TodoList';

export const useTodoItem = (id:number) => {
  const { queryTodoItem } = useContext(ContainerContext);
  const [todoItem, setTodoItem] = useState<TodoItem>();

  useEffect(() => {
    setTodoItem(queryTodoItem(id));
  }, []);

  return {
    todoItem,
  };
};
