import React from 'react'
import { useLocation } from 'react-router-dom'

import LogForm from '../components/Forms/LogForm'
import SignForm from '../components/Forms/SignForm'
import { LOGIN_ROUTE } from '../utils/consts'

function LoginPage() {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return isLogin ? <SignForm /> : <LogForm />
}

export default LoginPage
