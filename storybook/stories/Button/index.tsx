import React, { ReactElement } from 'react';
import { TouchableHighlight } from 'react-native';

export default function Button({ onPress, children }:{ onPress: () => void, children: ReactElement }) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}
