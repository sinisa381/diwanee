import React from 'react'
import Header from '../components/header_footer/header'
import Footer from '../components/header_footer/footer'
import { Flex } from 'rebass'
import styled from 'styled-components'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Flex flexDirection='column'>
        <Section>{children}</Section>
        <Footer />
      </Flex>
    </>
  )
}

export default Layout

const Section = styled.section`
  min-height: calc(100vh - 100px);
`
