export interface SafeVault {
  savePin(name: string): Promise<boolean>;

  checkPin(name: string): Promise<boolean>;
}
