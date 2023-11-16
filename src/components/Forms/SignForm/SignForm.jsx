/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Flex, Input } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { REGISTRATION_ROUTE } from '../../../utils/consts'

import styles from './SignForm.module.scss'

function SignForm() {
  return (
    <form className={styles.signForm}>
      <Flex vertical>
        <div className={styles.signForm__header}>Sign In</div>
        <label htmlFor="email">
          Email address
          <Input className={styles.signForm__input} type="email" id="email" />
        </label>
        <label htmlFor="password">
          Password
          <Input className={styles.signForm__input} type="password" id="password" />
        </label>
        <Button className={styles.signForm__btn} type="primary" size="large">
          Create
        </Button>
        <div className="logForm__footnote">
          Don’t have an account? <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>.
        </div>
      </Flex>
    </form>
  )
}

export default SignForm
