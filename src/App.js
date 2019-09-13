// @flow

import React from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import GlobalStyle from './styles'
import Routes from './routes'
import store from './store'

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <Provider store={store}>
      <Wrap>
        <GlobalStyle />
        <Routes />
      </Wrap>
    </Provider>
  )
}

export default App
