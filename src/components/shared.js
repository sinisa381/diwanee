import React from 'react'
import { mq } from './globals'
import { Text as Txt } from 'rebass'

import styled from 'styled-components'

export const DisplayNone = styled.div`
  display: none;
  ${mq[1]} {
    display: block;
  }
`

export const ErrorMsg = props => (
  <Txt fontFamily='roboto' color='red' fontSize={[1, 2, 2]} {...props}>
    {props.children}
  </Txt>
)
export const NullError = props => (
  <Txt fontFamily='roboto' color='transparent' fontSize={[1, 2, 2]} {...props}>
    {props.children}
  </Txt>
)
