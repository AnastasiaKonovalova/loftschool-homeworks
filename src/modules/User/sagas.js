import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { getApiKey } from '../Auth';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getUserInfo } from './api';


function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  const apiKey = yield select(getApiKey);
  try{
    const result = yield call(getUserInfo, apiKey, action.payload);
    yield put(fetchSuccess(result))
  } catch (error){
    yield put(fetchFailure(error))
  }

}

export default function*() {
  yield fork(fetchUserWatcher)
}
