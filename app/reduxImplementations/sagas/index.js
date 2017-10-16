import { fork } from 'redux-saga/effects';
import settingsSagas from './settings';
import authSagas from './auth';

const rootSaga = function* root() {

    yield [
        fork(settingsSagas),
        fork(authSagas)
    ]
}  

export default rootSaga;