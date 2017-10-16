import { fork } from 'redux-saga/effects';
import { websiteInputChanged, submitNewWebsite, editWebsite } from './website';
import { ipPageInputChanged, submitNewIpPage, editIpPage } from './ipPage';
import { userInputChanged, submitNewUser, editUser } from './users';

export default function* settingsSagas() {
    
    yield [
        fork(websiteInputChanged),
        fork(submitNewWebsite),
        fork(editWebsite),
        fork(ipPageInputChanged),
        fork(submitNewIpPage),
        fork(editIpPage),
        fork(userInputChanged),
        fork(submitNewUser),
        fork(editUser)
    ]
} 