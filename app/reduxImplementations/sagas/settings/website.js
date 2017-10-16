import { take, call, put, select } from 'redux-saga/effects';
import { Map, List } from 'immutable';
import { bindInputChange } from '../../reducerStateMiddleware';
import ConstantBuilder from '../../constantBuilder'
import ActionBuilder from '../../actionBuilder';
import { logError } from '../../../utils/errorLog';
import { callApi } from '../../../utils/request';
import uuid from 'node-uuid';

const getStateData = (state) => Map(state.masterEntries.website); 

export function* websiteInputChanged() {
    
    while (true) {

        const { name, value } = yield take(ConstantBuilder("MASTER_ENTRIES", "WEBSITE_INPUT_CHANGED"));
        let formData = yield select(getStateData);

        try {

            let callbacks = [];
            let newState  = yield call(bindInputChange, callbacks, name, value, false);
            yield put(ActionBuilder("MASTER_ENTRIES", "WEBSITE_SET_FORM", { 'data': newState }));
            
        }
        catch (e) {

            logError(e);
        }
    }
}

export function* submitNewWebsite() {

    while(true) {

        yield take(ConstantBuilder("MASTER_ENTRIES", "WEBSITE_SUBMIT_FORM"));

        let formData = yield select(getStateData);
        let data = {
            'Category': formData.get("Category"),
            'CN': formData.get("CN"),
            'Website': formData.get("Website"),
            'Id': formData.get("Id") ?  formData.get("Id") : uuid.v1()
        };

        // let response = yield call(callApi, "", {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: { 
        //         'Content-Type': 'application/json;charset=UTF-8'
        //     }
        // });

        let websiteList = formData.get("WebsiteList").toArray();

        if (!formData.get("Id")) { 

            websiteList.push(data)

        } else {

            let website = _.find(websiteList, (i) => { return i.Id == formData.get("Id") });

            if(website) {
                
                _.extend(website, data);
            }
        }

        yield put(ActionBuilder("MASTER_ENTRIES", "WEBSITE_SET_FORM", { 'data': { 'WebsiteList': List(websiteList)  } }));
        yield put(ActionBuilder("MASTER_ENTRIES", "WEBSITE_CLEAR_FORM"));

    }
}

export function* editWebsite() {

    while(true) {

        const { id }  = yield take(ConstantBuilder("MASTER_ENTRIES", "WEBSITE_SUBMIT_EDIT_CLICK"));
        let formData = yield select(getStateData);
        let website = _.find(formData.get("WebsiteList").toArray(), (i) => { return i.Id == id });

        if(website) {

            yield put(ActionBuilder("MASTER_ENTRIES", "WEBSITE_SET_FORM", { 'data': { ...website } }));
        }
    }
}