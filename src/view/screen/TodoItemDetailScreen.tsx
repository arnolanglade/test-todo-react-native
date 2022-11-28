import React from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import useTodoItem from '../../usecase/UseTodoItem';
import { RootStackParamList } from '../../app/RootStackListType';

type Props = NativeStackScreenProps<RootStackParamList, 'Item'>;

export default function TodoItemDetailScreen({ route }: Props) {
  const { todoItem } = useTodoItem(route?.params?.id);

  return (
    <View>
      <Text testID="label">{todoItem?.label}</Text>
      <Text>{todoItem?.id}</Text>
    </View>
  );
}
