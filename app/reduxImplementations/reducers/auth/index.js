import { combineReducers } from 'redux'
import userReducer from './user';
import loginReducer from './login';

export default combineReducers({
    'user': userReducer,
    'login': loginReducer
})