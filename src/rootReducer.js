// @flow

import { combineReducers } from 'redux'
import bondCardReducer from './pages/BondCard/ducks'

const rootReducer = combineReducers({
  bondCard: bondCardReducer,
})

export default rootReducer
