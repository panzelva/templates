import { css } from "@emotion/react"
import React from "react"
import Square from "./components/Square"
import { withStyles } from "./styles/withStyles"

const Root = () => {
  return (
    <div
      css={css`
        color: red;
      `}
    >
      <h1>Hello World!</h1>
      <Square />
    </div>
  )
}

const App = () => {
  return (
    <>
      <Root />
    </>
  )
}

export default withStyles(App)
