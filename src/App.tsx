/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { ReactElement } from 'react';
import {
  FlatList, SafeAreaView, Text, View,
} from 'react-native';

import FastImage from 'react-native-fast-image';

import { IntlProvider } from 'react-intl';
import { TodoItem } from './domain/TodoList';
import { container, ContainerContext } from './app/ContainerContext';
import { useTodoList } from './usecase/UseTodoList';

// Translated messages in French with matching IDs to what you declared
const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
};

function TodoListView() {
  const { todoList } = useTodoList();

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

  return <FlatList data={todoList} renderItem={renderTodoItem} />;
}

function App() {
  return (
    <ContainerContext.Provider value={container}>
      <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
        <SafeAreaView>
          <TodoListView />
        </SafeAreaView>
      </IntlProvider>
    </ContainerContext.Provider>
  );
}

export default App;
