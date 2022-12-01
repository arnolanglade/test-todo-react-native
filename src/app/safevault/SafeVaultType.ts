export interface SafeVault {
  savePin(name: string): void;

  checkPin(name: string, callback: (isEqual: boolean) => void): boolean;
}
