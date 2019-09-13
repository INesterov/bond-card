// @flow

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Wrap, Button } from './styled'
import { changePeriod } from '../../ducks'

const PeriodSwitcher = () => {
  const dispatch = useDispatch()
  const { period } = useSelector((state) => state.bondCard)

  return (
    <Wrap>
      <Button
        isActive={period === 'week'}
        onClick={() => dispatch(changePeriod('week'))}
      >
        Week
      </Button>
      <Button
        isActive={period === 'month'}
        onClick={() => dispatch(changePeriod('month'))}
      >
        Month
      </Button>
      <Button
        isActive={period === 'quarter'}
        onClick={() => dispatch(changePeriod('quarter'))}
      >
        Quarter
      </Button>
      <Button
        isActive={period === 'year'}
        onClick={() => dispatch(changePeriod('year'))}
      >
        Year
      </Button>
      <Button
        isActive={period === 'max'}
        onClick={() => dispatch(changePeriod('max'))}
      >
        Max
      </Button>
    </Wrap>
  )
}

export default PeriodSwitcher
