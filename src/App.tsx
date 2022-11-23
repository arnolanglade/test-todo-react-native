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

import FastImage, { Source } from 'react-native-fast-image';

import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';

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

// const example: TodoList = [
//  {
//    id: 1,
//    label: 'label',
//    description: 'description',
//    status: TodoStatus.TODO,
//    assignee: {
//      name: 'Dupond',
//      firstname: 'Henri',
//      // eslint-disable-next-line global-require
//      image: require('../asset/images/portrait-homme-blanc-isole_53876-40306.webp'),
//    },
//  },
// ];

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

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const { todoList } = useTodoList(queryTodoList);

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
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <FlatList data={todoList} renderItem={renderTodoItem} />

        <Text>
          <FormattedMessage
            id="myMessage"
            defaultMessage="Today is {ts, date, ::yyyyMMdd}"
            values={{ ts: Date.now() }}
          />
          {' '}
          {/* eslint-disable-next-line react/style-prop-object */}
          <FormattedNumber value={19} currency="EUR" style="currency" />
        </Text>

      </SafeAreaView>
    </IntlProvider>
  );
}

export default App;
