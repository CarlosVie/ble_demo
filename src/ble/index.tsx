import BleManager from 'react-native-ble-manager';

export const startBle = (): void => {
  BleManager.start({showAlert: false});
};

export const stopScan = (): void => {
  BleManager.stopScan();
};

export const scanDevices = (): void => {
  BleManager.scan([], 50, true);
};

export const enableBluetooth = (): void => {
  BleManager.enableBluetooth();
};
