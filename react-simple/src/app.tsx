import React from "react"
import Global from "./styles/Global"
import Reset from "./styles/Reset"

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
