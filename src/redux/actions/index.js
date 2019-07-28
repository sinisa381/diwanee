import axios from 'axios'
import {
  LOGIN_USER,
  LOGOUT_USER,
  DETAILS_PAGE,
  LOGIN_ERROR,
  LOGIN_END,
  LOGIN_START,
  CLEAR_ERROR_MESSAGE
} from './types'

export function userLogin(user) {
  return {
    type: LOGIN_USER,
    payload: user
  }
}

export function clearErrorMessage() {
  return {
    type: CLEAR_ERROR_MESSAGE
  }
}

export function loginUser(data) {
  return dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    const url = `/jobs-login.php`
    dispatch(loginStart())
    return axios
      .post(url, data, config)
      .then(response => {
        dispatch(loginEnd())
        return dispatch(userLogin(response.data))
      })
      .catch(err => {
        dispatch(loginEnd())
        return dispatch(userLoginError(err))
      })
  }
}
export function logoutUser() {
  return dispatch => {
    dispatch({
      type: LOGOUT_USER
    })
  }
}

function loginStart() {
  return {
    type: LOGIN_START
  }
}

function loginEnd() {
  return {
    type: LOGIN_END
  }
}

const userLoginError = err => {
  return {
    type: LOGIN_ERROR,
    payload: err
  }
}
export function logout() {
  return dispatch => {
    axios.get(`/jobs-logout.php`).then(res => {
      dispatch(logoutUser())
    })
  }
}

function dispatchDetailsPage(data) {
  return {
    type: DETAILS_PAGE,
    payload: data
  }
}

export function detailsPage() {
  return dispatch => {
    return axios.get('/jobs-details.php').then(res => {
      return dispatch(dispatchDetailsPage(res.data))
    })
  }
}
