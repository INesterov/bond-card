// @flow

import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Title from './components/Title'
import Description from './components/Description'
import PeriodSwitcher from './components/PeriodSwitcher'
import TypeSwitcher from './components/TypeSwitcher'
import Chart from './components/Chart'
import { getBondDataAction } from './ducks'

const FilterWrap = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  margin-bottom: 12px;
`

const BondCard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBondDataAction('US67021BAE92'))
  }, [])

  return (
    <div>
      <Title>
        NII CAPITAL 7.625 21
      </Title>
      <Description />
      <FilterWrap>
        <PeriodSwitcher />
        <TypeSwitcher />
      </FilterWrap>
      <Chart />
    </div>
  )
}

export default BondCard
