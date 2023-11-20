export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: user,
  }
}

export const loginFailure = (error) => {
  return {
    type: 'LOGIN_FAILURE',
    payload: error,
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT',
  }
}

export const registerSuccess = () => {
  return {
    type: 'REGISTER_SUCCESS',
  }
}

export const registerFailure = (error) => {
  return {
    type: 'REGISTER_FAILURE',
    payload: error,
  }
}
