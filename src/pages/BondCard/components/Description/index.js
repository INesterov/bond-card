// @flow

import React from 'react'
import styled from 'styled-components'

const DescriptionWrap = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #c0c0c0;
  display: flex;
  flex-direction: column;
`

const Description = () => (
  <DescriptionWrap>
    <span>US67021BAE92</span>
    <span>NII CAPITAL CORP, Telecommunications, NR, till 01.04.2016</span>
  </DescriptionWrap>
)

export default Description
