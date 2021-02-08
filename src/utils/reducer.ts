// Imports: Dependencies
import {combineReducers} from 'redux';

// Imports: Reducers
import globalReducer from '../store/global/reducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  global: globalReducer,
});

// Exports
export default rootReducer;
