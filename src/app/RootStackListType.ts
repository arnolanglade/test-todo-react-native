enum Page {
  Home,
  Item,
}

export type RootStackParamList = {
  TodoList: undefined;
  Item: { id: number };
  Assignee: undefined;
};
