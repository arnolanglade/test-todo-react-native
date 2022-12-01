import { NativeModules } from 'react-native';
import { SafeVault } from './SafeVaultType';

const { SaveVaultModule } = NativeModules;

export default SaveVaultModule as SafeVault;
