// @flow

import { createAction, createReducer } from 'redux-act'

export const changePeriod = createAction('change period')
export const changeType = createAction('change type')
export const getBondDataAction = createAction('get bond data')
export const getBondDataSuccessAction = createAction('get bond data success')

type BondValue = {
  date: string,
  values: {
    price: number,
    yield: number,
    spread: number,
  }
}

type State = {
  period: string,
  type: string,
  data: BondValue[],
  isLoading: boolean,
}

const initialState: State = {
  period: 'week',
  type: 'yield',
  data: [],
  isLoading: false,
}

const reducer = createReducer({
  [changePeriod]: (state: State, period) => ({ ...state, period }),
  [changeType]: (state: State, type) => ({ ...state, type }),
  [getBondDataAction]: (state: State) => ({ ...state, isLoading: true }),
  [getBondDataSuccessAction]: (state: State, data: BondValue[]) => ({
    ...state,
    data,
    isLoading: false,
  }),
}, initialState)

export default reducer
