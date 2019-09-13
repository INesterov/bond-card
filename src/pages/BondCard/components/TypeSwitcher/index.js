// @flow

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeType } from '../../ducks'

const TypeSwitcher = () => {
  const dispatch = useDispatch()
  const { type } = useSelector((state) => state.bondCard)

  return (
    <select name="select" onChange={(e) => dispatch(changeType(e.target.value))}>
      <option
        value="yield"
        selected={type === 'yield'}
      >
        Yield
      </option>
      <option
        value="spread"
        selected={type === 'spread'}
      >
        Spread
      </option>
      <option
        value="price"
        selected={type === 'price'}
      >
        Price
      </option>
    </select>
  )
}

export default TypeSwitcher
