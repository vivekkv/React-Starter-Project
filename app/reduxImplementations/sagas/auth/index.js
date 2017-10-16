import { fork } from 'redux-saga/effects';
import { loginInputChanged, submitLogin, logOff } from './login';

export default function* settingsSagas() {
    
    yield [
        fork(loginInputChanged),
        fork(submitLogin),
        fork(logOff)
    ]
} 