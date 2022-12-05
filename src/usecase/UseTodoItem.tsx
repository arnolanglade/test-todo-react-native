import { useContext, useEffect, useState } from 'react';
import { ServiceContainerContext } from '../app/ServiceContainerContext';
import { TodoItem } from '../domain/TodoList';

export default function useTodoItem(id:number) {
  const { queryTodoItem } = useContext(ServiceContainerContext);
  const [todoItem, setTodoItem] = useState<TodoItem>();

  useEffect(() => {
    setTodoItem(queryTodoItem(id));
  }, []);

  return {
    todoItem,
  };
}
