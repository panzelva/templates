import { css } from "@emotion/core"
import React from "react"
import { withStyles } from "./styles/withStyles"

const Root = () => {
  return (
    <div
      css={css`
        color: red;
      `}
    >
      <h1>Hello World!</h1>
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
