import {Action} from 'redux';
import {Device} from '../../ble/types';
import GlobalActionsType from './constantes';

export interface GlobalState {
  devices: Device[];
}

export interface FetchDevicesSuccess
  extends Action<GlobalActionsType.FETCH_DEVICES_SUCCESS> {
  payload: Device[];
}

export type GlobalActions = FetchDevicesSuccess;
