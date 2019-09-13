// @flow

import React from 'react'
import styled from 'styled-components'

type Props = {
  children: string,
}

const TitleWrap = styled.div`
  display: flex;
  align-items: flex-end;
`

const Header = styled.h1`
  line-height: 1;
  margin: 0;
`

const Currency = styled.span`
  margin-left: 8px;
`

const Title = ({ children }: Props) => (
  <TitleWrap>
    <Header>{children}</Header>
    <Currency>USD</Currency>
  </TitleWrap>
)

export default Title
