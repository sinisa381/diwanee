import {
  LOGIN_USER,
  LOGOUT_USER,
  DETAILS_PAGE,
  LOGIN_ERROR,
  LOGIN_START,
  LOGIN_END,
  CLEAR_ERROR_MESSAGE
} from '../actions/types'
const initState = {
  isAuth: false,
  loading: false,
  errorMessage: ''
}
export default function(state = initState, action) {
  switch (action.type) {
    case CLEAR_ERROR_MESSAGE:
      return { ...state, errorMessage: '' }
    case LOGIN_START:
      return { ...state, loading: true }
    case LOGIN_END:
      return { ...state, loading: false }
    case LOGIN_ERROR:
      return {
        ...state,
        errorMessage: action.payload.response.data.status,
        isAuth: false,
        loading: false
      }
    case DETAILS_PAGE:
      return { ...state, details: action.payload }
    case LOGIN_USER:
      return {
        ...state,
        loginSuccess: action.payload,
        isAuth: true,
        loading: false,
        errorMessage: ''
      }
    case LOGOUT_USER:
      return { ...state, isAuth: false, loading: false }
    default:
      return state
  }
}
