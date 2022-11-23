/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { ReactElement, useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View, Text,
} from 'react-native';

import FastImage, { Source } from 'react-native-fast-image';

import { IntlProvider } from 'react-intl';

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
  id : number,
  label: string,
  description: string,
  status: TodoStatus,
  assignee: Assignee
};

export type TodoList = TodoItem[];

const queryTodoList = () : TodoList => [
  {
    id: 1,
    label: 'label',
    description: 'description',
    status: TodoStatus.TODO,
    assignee: {
      name: 'Dupond',
      firstname: 'Henri',
      // eslint-disable-next-line global-require
      image: require('../asset/images/portrait-homme-blanc-isole_53876-40306.webp'),
    },
  },
];

export const useTodoList = (repo : () => TodoList) => {
  const [todoList, setTodoList] = useState<TodoList>([]);

  useEffect(() => {
    setTodoList(repo());
  }, []);

  return {
    todoList,
  };
};

// Translated messages in French with matching IDs to what you declared
const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
};

function TodoListView({
  data,
  renderItem,
}: {
  data: TodoItem[],
  renderItem: ({ item }: { item: TodoItem }) => ReactElement }) {
  return <FlatList data={data} renderItem={renderItem} />;
}

function App() {
  const { todoList } = useTodoList(queryTodoList);

  const renderTodoItem = ({ item }: { item: TodoItem }): ReactElement => (
    <View style={{
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection: 'row',
    }}
    >
      <View style={{ flex: 1, backgroundColor: 'salmon' }}>
        <FastImage
          style={{ width: '100%', height: '100%' }}
          source={item.assignee.image}
          resizeMode={FastImage.resizeMode.center}
        />
      </View>
      <View style={{ flex: 4, backgroundColor: 'lightblue' }}>
        <Text>{item.label}</Text>
        <Text>{item.description}</Text>
        <Text>{item.status}</Text>
        <Text>{item.assignee.name}</Text>
        <Text>{item.assignee.firstname}</Text>
      </View>
    </View>
  );

  return (
    <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
      <SafeAreaView>
        <TodoListView data={todoList} renderItem={renderTodoItem} />
      </SafeAreaView>
    </IntlProvider>
  );
}

export default App;
