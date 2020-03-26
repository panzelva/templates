import React, { ReactNode, CSSProperties } from 'react'
import styled from 'styled-components'

interface IProps {
  children: ReactNode
  style?: CSSProperties | undefined
}

const Center = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SimpleCenter = (props: IProps) => {
  return <Center style={props.style}>{props.children}</Center>
}

export default SimpleCenter
