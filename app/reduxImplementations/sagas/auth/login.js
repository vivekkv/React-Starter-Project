import { take, call, put, select } from 'redux-saga/effects';
import { Map, List } from 'immutable';
import { bindInputChange } from '../../reducerStateMiddleware';
import ConstantBuilder from '../../constantBuilder'
import ActionBuilder from '../../actionBuilder';
import { logError } from '../../../utils/errorLog';
import { callApi } from '../../../utils/request';
import {  push } from 'react-router-redux';
import uuid from 'node-uuid';

const getStateData = (state) => Map(state.auth.login); 

export function* loginInputChanged() {
    
    while (true) {

        const { name, value } = yield take(ConstantBuilder("AUTH", "LOGIN_INPUT_CHANGED"));
        let formData = yield select(getStateData);

        try {

            let callbacks = [];
            let newState  = yield call(bindInputChange, callbacks, name, value, false);
            yield put(ActionBuilder("AUTH", "LOGIN_SET_FORM", { 'data': newState }));
            
        }
        catch (e) {

            logError(e);
        }
    }
}

export function* submitLogin() {

    while(true) {

        yield take(ConstantBuilder("AUTH", "LOGIN_SUBMIT_FORM"));
        let formData = yield select(getStateData);
        
        let data = {
            'UserName': formData.get("UserName"),
            'Password': formData.get("Password")
        };

        // let response = yield call(callApi, "", {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: { 
        //         'Content-Type': 'application/json;charset=UTF-8'
        //     }
        // });

        yield put(ActionBuilder("AUTH", "USER_SET_FORM", { 'data':  { 'UserAuthenticated': true } }));
        yield put(ActionBuilder("AUTH", "LOGIN_CLEAR_FORM"));
    }
}

export function* logOff() {

    while(true) {

        yield take(ConstantBuilder("AUTH", "LOGOFF"));
        yield put(push("/"))
        yield put(ActionBuilder("AUTH", "USER_SET_FORM", { 'data':  { 'UserAuthenticated': false } }));
    }
}