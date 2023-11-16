import { Button, Flex, Space } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
// import { useLocation, useNavigate } from 'react-router-dom'

import { HERO_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts'

import styles from './Header.module.scss'

function Header() {
  // const history = useNavigate()
  // const location = useLocation()

  return (
    <Flex className={styles.header} justify="space-between" align="center">
      <Button className={styles.header__logo} type="text">
        <NavLink to={HERO_ROUTE}>Realworld Blog</NavLink>
      </Button>
      <Space className="header__nav">
        <Button type="text">
          <NavLink to={LOGIN_ROUTE}>Sign In</NavLink>
        </Button>
        <Button danger>
          <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>
        </Button>
      </Space>
    </Flex>
  )
}

export default Header
