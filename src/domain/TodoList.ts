import { Source } from 'react-native-fast-image';

export enum TodoStatus {
  TODO,
  PENDING,
  DONE,
}

export type Assignee = {
  name: string,
  firstname: string,
  image: number | Source
};
export type TodoItem = {
  id: number,
  label: string,
  description: string,
  status: TodoStatus,
  assignee: Assignee
};
export type TodoList = Array<TodoItem>;
