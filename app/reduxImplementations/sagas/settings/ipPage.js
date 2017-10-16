import { take, call, put, select } from 'redux-saga/effects';
import { Map, List } from 'immutable';
import { bindInputChange } from '../../reducerStateMiddleware';
import ConstantBuilder from '../../constantBuilder'
import ActionBuilder from '../../actionBuilder';
import { logError } from '../../../utils/errorLog';
import { callApi } from '../../../utils/request';
import uuid from 'node-uuid';

const getStateData = (state) => Map(state.masterEntries.ipPage); 

export function* ipPageInputChanged() {
    
    while (true) {

        const { name, value } = yield take(ConstantBuilder("MASTER_ENTRIES", "IPPAGE_INPUT_CHANGED"));
        let formData = yield select(getStateData);

        try {

            let callbacks = [];
            let newState  = yield call(bindInputChange, callbacks, name, value, false);
            yield put(ActionBuilder("MASTER_ENTRIES", "IPPAGE_SET_FORM", { 'data': newState }));
            
        }
        catch (e) {

            logError(e);
        }
    }
}

export function* submitNewIpPage() {

    while(true) {

        yield take(ConstantBuilder("MASTER_ENTRIES", "IPPAGE_SUBMIT_FORM"));

        let formData = yield select(getStateData);
        let data = {
            'IP': formData.get("IP"),
            'Description': formData.get("Description"),
            'Id': formData.get("Id") ?  formData.get("Id") : uuid.v1()
        };

        // let response = yield call(callApi, "", {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: { 
        //         'Content-Type': 'application/json;charset=UTF-8'
        //     }
        // });

        let ipList = formData.get("IpList").toArray();

        if (!formData.get("Id")) { 

            ipList.push(data)

        } else {

            let ipInfo = _.find(ipList, (i) => { return i.Id == formData.get("Id") });

            if(ipInfo) {
                
                _.extend(ipInfo, data);
            }
        }

        yield put(ActionBuilder("MASTER_ENTRIES", "IPPAGE_SET_FORM", { 'data': { 'IpList': List(ipList)  } }));
        yield put(ActionBuilder("MASTER_ENTRIES", "IPPAGE_CLEAR_FORM"));

    }
}

export function* editIpPage() {

    while(true) {

        const { id }  = yield take(ConstantBuilder("MASTER_ENTRIES", "IPPAGE_SUBMIT_EDIT_CLICK"));
        let formData = yield select(getStateData);
        let ipInfo = _.find(formData.get("IpList").toArray(), (i) => { return i.Id == id });

        if(ipInfo) {

            yield put(ActionBuilder("MASTER_ENTRIES", "IPPAGE_SET_FORM", { 'data': { ...ipInfo } }));
        }
    }
}