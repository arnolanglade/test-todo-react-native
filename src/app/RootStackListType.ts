export type RootStackParamList = {
  Tab: TabStackParamList,
  Item: { id: number };
};

export type TabStackParamList = {
  TodoList: never;
  Assignee: never;
};
