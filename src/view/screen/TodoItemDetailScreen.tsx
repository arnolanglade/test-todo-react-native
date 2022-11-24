import React from 'react';
import { Text, View } from 'react-native';
import { useTodoItem } from '../../usecase/UseTodoItem';

export default function TodoItemDetailScreen() {
  const { todoItem } = useTodoItem();

  return (
    <View>
      <Text>{todoItem?.label}</Text>
    </View>
  );
}
