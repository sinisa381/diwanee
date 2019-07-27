import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import createRootReducer from './rootReducer'

const middlewares = [thunk]

export const store = createStore(
  createRootReducer(),
  applyMiddleware(...middlewares)
)
export const persistor = persistStore(store)
