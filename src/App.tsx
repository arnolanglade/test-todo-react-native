/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {
  createContext, ReactElement, useContext, useEffect, useState,
} from 'react';
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

export const container = { queryTodoList };
export const ContainerContext = createContext({});

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

// Translated messages in French with matching IDs to what you declared
const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
};

function TodoListView({
  renderItem,
}: {
  renderItem: ({ item }: { item: TodoItem }) => ReactElement }) {
  const { todoList } = useTodoList();
  return <FlatList data={todoList} renderItem={renderItem} />;
}

function App() {
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
    <ContainerContext.Provider value={container}>
      <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
        <SafeAreaView>
          <TodoListView renderItem={renderTodoItem} />
        </SafeAreaView>
      </IntlProvider>
    </ContainerContext.Provider>
  );
}

export default App;
