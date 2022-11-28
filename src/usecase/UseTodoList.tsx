import { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ContainerContext } from '../app/ContainerContext';
import { TodoList } from '../domain/TodoList';

export default function useTodoList() {
  const { queryTodoList } = useContext(ContainerContext);
  const [todoList, setTodoList] = useState<TodoList>([]);

  useQuery({
    queryKey: ['todoListQuery'],
    queryFn: queryTodoList,
    onSuccess: (data) => {
      setTodoList(data as TodoList);
    },
  });

  return {
    todoList,
  };
}
