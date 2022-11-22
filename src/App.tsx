/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { ReactElement, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  useColorScheme, View, Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

enum TodoStatus {
  TODO,
  PENDING,
  DONE,
}

type Assignee = {
  name: string,
  firstname: string
};

type TodoItem = {
  id : number,
  label: string,
  description: string,
  status: TodoStatus,
  assignee: Assignee
};

type TodoList = TodoItem[];

const todoLists: TodoList = [];

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const [todoList, setTodoList] = useState<TodoList>(todoLists);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderTodoItem = ({ item }: { item: TodoItem }): ReactElement => (
    <View>
      <Text>{item.label}</Text>
    </View>
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList data={todoList} renderItem={renderTodoItem} />
    </SafeAreaView>
  );
}

export default App;
