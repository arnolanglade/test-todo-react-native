import { TodoList, TodoStatus } from '../domain/TodoList';

export const queryTodoList = (): TodoList => [
  {
    id: 1,
    label: 'label',
    description: 'description',
    status: TodoStatus.TODO,
    assignee: {
      name: 'Dupond',
      firstname: 'Henri',
      // eslint-disable-next-line global-require
      image: require('../../asset/images/portrait-homme-blanc-isole_53876-40306.webp'),
    },
  },
];
