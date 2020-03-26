import React from "react"
import Global from "./styles/global"
import Reset from "./styles/reset"

const Root = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

const App = () => {
  return (
    <>
      <Reset />
      <Global />
      <Root />
    </>
  )
}

export default App
