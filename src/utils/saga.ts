import {all} from 'redux-saga/effects';
import globalSagaWatch from '../store/global/saga';

export default function* rootSaga() {
  yield all([globalSagaWatch()]);
}
