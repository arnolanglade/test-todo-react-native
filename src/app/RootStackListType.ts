enum Page {
  Home,
  Item,
}

export type RootStackParamList = {
  Home: undefined;
  Item: { id: number };
  Assignee: undefined;
};
