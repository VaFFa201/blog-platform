import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { HERO_ROUTE } from '../../utils/consts'
import { authRoutes, publicRoutes } from '../../routes'

import styles from './AppRouter.module.scss'

function AppRouter() {
  const isLogin = useSelector((state) => state.isLogin)

  return (
    <main className={styles.main}>
      <Routes>
        {isLogin &&
          authRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} exact />)}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
        <Route path="*" element={<Navigate replace to={HERO_ROUTE} />} />
      </Routes>
    </main>
  )
}

export default AppRouter
