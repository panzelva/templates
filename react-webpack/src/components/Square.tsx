import { css } from "@emotion/react"
import React from "react"

export function Square() {
  return (
    <div
      css={css`
        width: 100px;
        height: 100px;
        background-color: red;
      `}
    />
  )
}
