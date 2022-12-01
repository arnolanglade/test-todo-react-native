import { NativeModules } from 'react-native';
import { SafeVault } from './SafeVaultType';

const { SafeVaultModule } = NativeModules;

export default SafeVaultModule as SafeVault;
