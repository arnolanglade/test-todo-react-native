import { NativeModules } from 'react-native';

const { SaveVaultModule } = NativeModules;

interface SafeVault {
  savePin(name: string): Promise<void>;
  checkPin(name: string): Promise<boolean>;
}

export default SaveVaultModule as SafeVault;
