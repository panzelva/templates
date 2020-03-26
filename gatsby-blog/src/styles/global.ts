import { createGlobalStyle, css } from 'styled-components'

const style = css`
  @import url('https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap');

  html {
    font-family: 'Quicksand', sans-serif;
  }
`

const Global = createGlobalStyle`
  ${style}
`

export default Global
