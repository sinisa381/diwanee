import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import userReducer from '../reducers'
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}
export default () =>
  persistReducer(
    persistConfig,
    combineReducers({
      user: userReducer
    })
  )
