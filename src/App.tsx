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

const todoLists: TodoList = [
  {
    id: 1,
    label: 'label',
    description: 'description',
    status: TodoStatus.TODO,
    assignee: { name: 'Birba', firstname: 'Alexandre' },
  },
];

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const [todoList, setTodoList] = useState<TodoList>([]);

  useEffect(() => {
    setTodoList(todoLists);
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderTodoItem = ({ item }: { item: TodoItem }): ReactElement => (
    <View style={{
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection: 'row',
    }}
    >
      <View style={{ flex: 1, backgroundColor: 'salmon' }} />
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
