import { combineReducers } from 'redux'
import sensor from './sensor';
import website from './website';
import ipPage from './ipPage';
import users from './users';
import requestPage from './requestPage';

export default combineReducers({
    'sensor': sensor,
    'website': website,
    'ipPage': ipPage,
    'users': users,
    'requestPage': requestPage
})