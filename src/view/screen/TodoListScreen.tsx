import React, { ReactElement } from 'react';
import {
  FlatList, Text, TouchableOpacity, View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TodoItem } from '../../domain/TodoList';
import { useTodoList } from '../../usecase/UseTodoList';
import { RootStackParamList } from '../../app/RootStackListType';

type Props = NativeStackScreenProps<RootStackParamList, 'TodoList'>;

export default function TodoListScreen({ navigation }: Props) {
  const { todoList } = useTodoList();

  const navigateToDetails = (id:number) => {
    navigation.navigate('Item', {
      id,
    });
  };

  const renderTodoItem = ({ item }: { item: TodoItem }): ReactElement => (
    <TouchableOpacity
      onPress={() => navigateToDetails(item.id)}
      style={{
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
    </TouchableOpacity>
  );

  return <FlatList data={todoList} renderItem={renderTodoItem} />;
}
