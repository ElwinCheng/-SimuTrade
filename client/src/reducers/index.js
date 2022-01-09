import { combineReducers } from 'redux'

import auth from './auth'
import user from './user'
import quote from './quote'

export default combineReducers({ auth, user, quote })