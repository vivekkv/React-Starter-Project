import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import authReducer from './auth';
import homeReducer from './home';
import masterEntries from './masterEntries';

export default () => {
    return combineReducers({
        'routing': routerReducer,
        'auth': authReducer,
        'home': homeReducer,
        'masterEntries': masterEntries
    })
}