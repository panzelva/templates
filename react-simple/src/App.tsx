import { css } from "@emotion/core"
import React, { Fragment } from "react"
import Global from "./styles/Global"
import Reset from "./styles/Reset"
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
      <Reset />
      <Global />
      <Root />
    </Fragment>
  )
}

export default withStyles(App)
