import BleManager from 'react-native-ble-manager';
import {Device} from './types';

export const startBle = (): void => {
  console.log('Start scan');
  BleManager.start({showAlert: false});
};

export const stopScan = (): void => {
  console.log('Stop scan');
  BleManager.stopScan();
};

export const scanDevices = (): void => {
  BleManager.scan([], 50, true).then((results) => {
    console.log('Scanning...');
  });
};

export const enableBluetooth = () => {
  BleManager.enableBluetooth();
};

export const handleDiscoverPeripheral = (peripheral) => {
  const peripherals = new Map<string, Device>();
  let list = new Array();
  if (!peripheral.name) {
    peripheral.name = 'NO NAME';
  }
  peripherals.set(peripheral.id, peripheral);
  list.push(Array.from(peripherals.values()));
};
