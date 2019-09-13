import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Cormorant SC', sans-serif;
  }
`

export default GlobalStyle
