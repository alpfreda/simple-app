import {usersConstants} from '../constants'

export const setWidget = data => {
  return dispatch => {
    dispatch({
      type: usersConstants.SET_VIEW_USER,
      payload: data,
    })
  }
}
