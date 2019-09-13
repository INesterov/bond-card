// @flow

import { all } from 'redux-saga/effects'
import bondCardSaga from './pages/BondCard/sagas'

export default function* rootSaga(): any {
  yield all([
    bondCardSaga(),
  ])
}
