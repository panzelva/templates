import { css } from "@emotion/core"
import React, { Fragment } from "react"
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
    <Fragment>
      <Root />
    </Fragment>
  )
}

export default withStyles(App)
