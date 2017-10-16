import { take, call, put, select } from 'redux-saga/effects';
import { Map, List } from 'immutable';
import { bindInputChange } from '../../reducerStateMiddleware';
import ConstantBuilder from '../../constantBuilder'
import ActionBuilder from '../../actionBuilder';
import { logError } from '../../../utils/errorLog';
import { callApi } from '../../../utils/request';
import uuid from 'node-uuid';

const getStateData = (state) => Map(state.masterEntries.users); 

export function* userInputChanged() {
    
    while (true) {

        const { name, value } = yield take(ConstantBuilder("MASTER_ENTRIES", "USERS_INPUT_CHANGED"));
        let formData = yield select(getStateData);

        try {

            let callbacks = [];
            let newState  = yield call(bindInputChange, callbacks, name, value, false);
            yield put(ActionBuilder("MASTER_ENTRIES", "USERS_SET_FORM", { 'data': newState }));
            
        }
        catch (e) {

            logError(e);
        }
    }
}

export function* submitNewUser() {

    while(true) {

        yield take(ConstantBuilder("MASTER_ENTRIES", "USERS_SUBMIT_FORM"));

        let formData = yield select(getStateData);
        let data = {
            'Name': formData.get("Name"),
            'Password': formData.get("Password"),
            'Role': formData.get("Role"),
            'Id': formData.get("Id") ?  formData.get("Id") : uuid.v1()
        };

        // let response = yield call(callApi, "", {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: { 
        //         'Content-Type': 'application/json;charset=UTF-8'
        //     }
        // });

        let userList = formData.get("UserList").toArray();

        if (!formData.get("Id")) { 

            userList.push(data)

        } else {

            let user = _.find(userList, (i) => { return i.Id == formData.get("Id") });

            if(user) {
                
                _.extend(user, data);
            }
        }

        yield put(ActionBuilder("MASTER_ENTRIES", "USERS_SET_FORM", { 'data': { 'UserList': List(userList)  } }));
        yield put(ActionBuilder("MASTER_ENTRIES", "USERS_CLEAR_FORM"));

    }
}

export function* editUser() {

    while(true) {

        const { id }  = yield take(ConstantBuilder("MASTER_ENTRIES", "USERS_SUBMIT_EDIT_CLICK"));
        let formData = yield select(getStateData);
        let ipInfo = _.find(formData.get("UserList").toArray(), (i) => { return i.Id == id });

        if(ipInfo) {

            yield put(ActionBuilder("MASTER_ENTRIES", "USERS_SET_FORM", { 'data': { ...ipInfo } }));
        }
    }
}