import PostList from './components/PostList'
import LoginPage from './pages/LoginPage'
import PostView from './components/PostView'
import {
  HERO_ROUTE,
  ARTICLES_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  PROFILE_ROUTE,
  NEW_ARTICLE_ROUTE,
} from './utils/consts'

export const authRoutes = [
  {
    path: PROFILE_ROUTE,
    Component: PostList,
  },
  {
    path: `${ARTICLES_ROUTE}/:sign`,
    Component: PostView,
  },
  {
    path: `${ARTICLES_ROUTE}/:sign/edit`,
    Component: PostList,
  },
  {
    path: NEW_ARTICLE_ROUTE,
    Component: PostList,
  },
]

export const publicRoutes = [
  {
    path: HERO_ROUTE,
    Component: PostList,
  },
  {
    path: ARTICLES_ROUTE,
    Component: PostList,
  },
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: LoginPage,
  },
  {
    path: `${ARTICLES_ROUTE}/:sign`,
    Component: PostView,
  },
]
