import { NativeModules } from 'react-native';

const { TeeModule } = NativeModules;

interface SafeVault {
  initTee(name: string): void;
}

export default TeeModule as SafeVault;
