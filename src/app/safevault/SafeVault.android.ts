import { NativeModules } from 'react-native';

const { SaveVaultModule } = NativeModules;

interface SafeVault {
  savePin(name: string): void;
  checkPin(name: string, callback:(isEqual:boolean) => void): boolean;
}

export default SaveVaultModule as SafeVault;
