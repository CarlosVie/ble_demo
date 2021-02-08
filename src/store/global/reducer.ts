import {GlobalActions, GlobalState} from './type';
import {GlobalActionsType} from './constantes';

const initialState: GlobalState = {
  devices: [],
};

const globalReducer = (
  state: GlobalState = initialState,
  action: GlobalActions,
) => {
  switch (action.type) {
    case GlobalActionsType.FETCH_DEVICES_SUCCESS: {
      return state;
    }
    default: {
      return state;
    }
  }
};

// Exports
export default globalReducer;
