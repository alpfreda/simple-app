import {usersConstants} from '../constants'
import initialState from './initial-state'

const postsReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case usersConstants.SET_VIEW_USER:
      const existViewedUsers = Object.assign([], state.viewedUsers)
      if (existViewedUsers.some(user => user.id === action.payload.id)) {
        existViewedUsers.map(user =>
          user.id === action.payload.id
            ? Object.assign({}, user, {
                lastUpdateTime: new Date(),
              })
            : user,
        )
      } else {
        existViewedUsers.push(
          Object.assign({}, action.payload, {
            lastUpdateTime: new Date(),
          }),
        )
      }

      return {
        ...state,
        viewedUsers: existViewedUsers.sort((a, b) => b.lastUpdateTime - a.lastUpdateTime).slice(0, 5),
      }

    default:
      return state
  }
}

export default postsReducer
