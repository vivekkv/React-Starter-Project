import { fromJS, List } from 'immutable';
import ConstantBuilder from '../../../constantBuilder';
import { buildNewState } from '../../../reducerStateMiddleware';

var initialState = fromJS({
      'IpList': List([])
});
  
export default function ipPageReducer(state = initialState, action) {

    const SET_FORM = ConstantBuilder("MASTER_ENTRIES", "IPPAGE_SET_FORM");
    const CLEAR_FORM = ConstantBuilder("MASTER_ENTRIES", "IPPAGE_CLEAR_FORM");

    switch (action.type) {

        case SET_FORM:

            return buildNewState(state, action.data);

        case CLEAR_FORM:

            return state.set("IP", null).set("Description", null).set("Id", null);

        default: 

            return state;
    }
}