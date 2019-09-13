// @flow

import { takeEvery, all, call, put } from 'redux-saga/effects'
import { getBondRequest } from 'api'
import { getBondDataAction, getBondDataSuccessAction } from './ducks'

function* getBondData({ payload }) {
  try {
    const response = yield call(getBondRequest, payload)
    const { data } = response.data

    yield put(getBondDataSuccessAction(data))
  } catch (error) {
    console.error(error)
  }
}

export default function* rootSaga(): any {
  yield all([
    takeEvery(getBondDataAction.getType(), getBondData),
  ])
}
