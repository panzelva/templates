import { createGlobalStyle, css } from "styled-components"
import { color } from "./variables"

const style = css`
  @import url("https://fonts.googleapis.com/css?family=Nunito:300,300i,400,400i,600,600i,700,700i&display=swap");

  html {
    font-family: "Nunito", sans-serif;
    color: ${color.coolGrey700};
  }
`

const Global = createGlobalStyle`
  ${style}
`

export default Global
