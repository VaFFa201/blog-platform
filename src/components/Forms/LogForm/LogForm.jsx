/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, Checkbox, Flex, Input } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { LOGIN_ROUTE } from '../../../utils/consts'

import styles from './LogForm.module.scss'

function LogForm() {
  return (
    <form className={styles.logForm}>
      <Flex vertical>
        <div className={styles.logForm__header}>Create new account</div>
        <label htmlFor="username">
          Username
          <Input className={styles.logForm__input} type="text" id="username" />
        </label>
        <label htmlFor="email">
          Email address
          <Input className={styles.logForm__input} type="email" id="email" />
        </label>
        <label htmlFor="password">
          Password
          <Input className={styles.logForm__input} type="password" id="password" />
        </label>
        <label htmlFor="password-rep">
          Repeat Password
          <Input className={styles.logForm__input} type="password" id="password-rep" />
        </label>
        <Checkbox className={styles.logForm__checkbox}>I agree to the processing of my personal information</Checkbox>
        <Button className={styles.logForm__btn} type="primary" size="large">
          Create
        </Button>
        <div className="logForm__footnote">
          Already have an account? <NavLink to={LOGIN_ROUTE}>Sign In</NavLink>.
        </div>
      </Flex>
    </form>
  )
}

export default LogForm
