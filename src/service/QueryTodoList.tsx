import { TodoItem, TodoList, TodoStatus } from '../domain/TodoList';

export const queryTodoList = (): Promise<TodoList> => fetch('https://mocki.io/v1/f8f2fc5d-f666-45cd-b30a-b4a631d99285').then((res) => res.json());

export const queryTodoItem = (itemId: number): TodoItem => (
  {
    id: itemId,
    label: 'label',
    description: 'description',
    status: TodoStatus.TODO,
    assignee: {
      name: 'Dupond',
      firstname: 'Henri',
      // eslint-disable-next-line global-require
      image: require('../../asset/images/portrait-homme-blanc-isole_53876-40306.webp'),
    },
  }
);
