import { combineReducers } from 'redux'
import appReducer from './application'

const rootReducer = combineReducers({
  // Define a top-level state field named `appData`, handled by `appReducer`
  appData: appReducer,
})

export default rootReducer
