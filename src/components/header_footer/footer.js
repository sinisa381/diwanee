import React from 'react'
import { Box, Text } from 'rebass'
import styled from 'styled-components'

const Footer = props => {
  return (
    <Box bg='#242424' color='whites.7'>
      <MainFooter>
        <Text fontSize={[1, 2, 3]}>
          Homework project for Diwanee Serbia by Sinisa Colic
        </Text>
      </MainFooter>
    </Box>
  )
}

export default Footer

const MainFooter = styled.footer`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
