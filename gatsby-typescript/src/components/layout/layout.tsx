import React, { ReactNode } from 'react'
import Global from '../../styles/global'
import Reset from '../../styles/reset'

interface IProps {
  children: ReactNode
}

const Layout = (props: IProps) => {
  const { children } = props

  return (
    <>
      <Reset />
      <Global />
      <main>{children}</main>
    </>
  )
}

export default Layout
