import {compose, createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {navMiddleware} from '../navigators/AppNavigator'

import reducer from './reducers'

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__})
function configureStore (initState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      navMiddleware,
      loggerMiddleware
    )
  )
  return createStore(reducer, initState, enhancer)
}

export default configureStore({})
