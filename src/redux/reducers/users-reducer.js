import {usersConstants} from '../constants'
import initialState from './initial-state'

const postsReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case usersConstants.SET_VIEW_USER:
      return {
        ...state,
        viewedUsers: [...state.viewedUsers, action.payload],
      }

    default:
      return state
  }
}

export default postsReducer
