import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getFollowersInfo } from './api';
import { getApiKey } from '../Auth';


function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow);
}

export function* fetchFollowersFlow(action) {
  const apiKey = yield select(getApiKey);
  try{
    const result = yield call(getFollowersInfo, apiKey, action.payload);
    yield put(fetchSuccess(result))
  } catch(error) {
    yield put(fetchFailure(error))
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
