import { NativeStackNavigationProp } from '@react-navigation/native-stack/src/types';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackListType';

export const createNavigationMock = <T extends keyof RootStackParamList>(functions: Partial<NativeStackNavigationProp<RootStackParamList, T, undefined>> = {}): NativeStackNavigationProp<RootStackParamList, T, undefined> => ({
  navigate: jest.fn(),
  reset: jest.fn(),
  goBack: jest.fn(),
  setParams: jest.fn(),
  dispatch: jest.fn(),
  setOptions: jest.fn(),
  isFocused: jest.fn(),
  addListener: jest.fn(),
  replace: jest.fn(),
  push: jest.fn(),
  pop: jest.fn(),
  popToTop: jest.fn(),
  canGoBack: jest.fn(),
  getId: jest.fn(),
  getParent: jest.fn(),
  getState: jest.fn(),
  removeListener: jest.fn(),
  ...functions,
});

export const createRouteParams = <T extends keyof RootStackParamList>(name: Extract<T, string>, params: Readonly<RootStackParamList[T]>): RouteProp<RootStackParamList, T> => ({
  params,
  name,
  key: 'key',
});
