import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'

const enhancer = compose(applyMiddleware(thunk))

export const store = createStore(
  reducers,
  composeWithDevTools(enhancer),
)