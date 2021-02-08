import {Device} from '../../ble/types';
import GlobalActionsType from './constantes';
import * as Type from './type';

export function actionFetchDevices(devices: any): Type.FetchDevicesSuccess {
  console.log('ACTION');
  return {
    type: GlobalActionsType.FETCH_DEVICES_SUCCESS,
    payload: devices,
  };
}
