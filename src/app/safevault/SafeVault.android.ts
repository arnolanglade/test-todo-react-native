import { NativeModules } from 'react-native';

const { SaveVaultModule } = NativeModules;

interface SafeVault {
  savePin(name: string): void;
  checkPin(name: string): Promise<boolean>;
}

export default SaveVaultModule as SafeVault;
