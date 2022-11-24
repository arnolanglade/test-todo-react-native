import { useContext, useEffect, useState } from 'react';
import { ContainerContext } from '../app/ContainerContext';
import { TodoList } from '../domain/TodoList';

export const useTodoList = () => {
  const { queryTodoList } = useContext(ContainerContext);
  const [todoList, setTodoList] = useState<TodoList>([]);

  useEffect(() => {
    setTodoList(queryTodoList());
  }, []);

  return {
    todoList,
  };
};
