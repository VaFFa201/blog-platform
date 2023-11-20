/* eslint-disable default-param-last */
/* eslint-disable indent */

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  isRegistered: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
      }
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isRegistered: true,
        error: null,
      }
    case 'REGISTER_FAILURE':
      return {
        ...state,
        isRegistered: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
