import React from 'react'
import { logout } from '../../redux/actions'
import { connect } from 'react-redux'
import theme from '../globals/theme'
import { Flex } from 'rebass'
import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const items = [
  { name: 'login page', linkTo: '/', public: true },
  { name: 'logout', public: false },
  { name: 'details page', linkTo: '/details', public: false }
]

const Header = props => {
  const logoutHandler = () => {
    props.dispatch(logout())
  }
  const showLinks = type => {
    let list = []
    if (props.user) {
      type.forEach(item => {
        if (!props.user.isAuth) {
          if (item.public) {
            list.push(item)
          }
        } else {
          if (item.name !== 'login page') {
            list.push(item)
          }
        }
      })
    }
    return list.map((item, i) => {
      return NavLink(item, i)
    })
  }
  const NavLink = (item, i) => {
    if (item.name === 'logout') {
      return (
        <LogoutButton onClick={logoutHandler} key={i}>
          logout
        </LogoutButton>
      )
    } else {
      return (
        <Link key={i} to={item.linkTo}>
          {item.name}
        </Link>
      )
    }
  }
  return (
    <NavHeader>
      <Flex alignItems='center' justifyContent='flex-end' pr={[3, 4, 5]}>
        {showLinks(items)}
      </Flex>
    </NavHeader>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Header)

const navLinkStyles = css`
  text-transform: uppercase;
  font-family: ${theme.fonts.roboto};
  font-size: 0.8rem;
  color: #eee;
  padding: 0 15px;
  cursor: pointer;
  outline: none;
  transition: color 0.1s;
  &:hover {
    color: ${theme.colors.whites[8]};
  }
`

const Link = styled(RouterLink)`
  ${navLinkStyles}
  text-decoration: none;
`

const LogoutButton = styled.button`
  ${navLinkStyles}
  border: none;
  background-color: transparent;
`
const NavHeader = styled.header`
  height: 50px;
  background-color: ${theme.colors.blue};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
