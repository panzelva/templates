import React from 'react'
import ReactDOM from 'react-dom'
import { add } from '@trident/utils'

const Root = () => {
  return <div>Hello Electron! {add(1, 2)}</div>
}

ReactDOM.render(<Root />, document.getElementById('app'))
