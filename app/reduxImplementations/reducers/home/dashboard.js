import { fromJS, List } from 'immutable';
import ConstantBuilder from '../../constantBuilder';
import { buildNewState } from '../../reducerStateMiddleware';

var initialState = fromJS({
    'userName': "VIVEK K.V" 
});
  
export default function dashboardReducer(state = initialState, action) {

    const SET_FORM = ConstantBuilder("HOME", "DASHBOARD_SET_FORM");
    const CLEAR_FORM = ConstantBuilder("HOME", "DASHBOARD_CLEAR_FORM");

    switch (action.type) {

        case SET_FORM:

            return state.set("data", buildNewState(state, action.data));

        case CLEAR_FORM:

            return initialState;

        default: 

            return state;
    }
}