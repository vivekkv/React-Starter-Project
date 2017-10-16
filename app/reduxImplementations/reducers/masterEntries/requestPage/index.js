import { fromJS, List } from 'immutable';
import ConstantBuilder from '../../../constantBuilder';
import { buildNewState } from '../../../reducerStateMiddleware';

var initialState = fromJS({
      
});
  
export default function requestPageReducer(state = initialState, action) {

    const SET_FORM = ConstantBuilder("MASTER_ENTRIES", "REQUEST_PAGE_SET_FORM");
    const CLEAR_FORM = ConstantBuilder("MASTER_ENTRIES", "REQUEST_PAGE_CLEAR_FORM");

    switch (action.type) {

        case SET_FORM:

            return state.set("data", buildNewState(state, action.data));

        case CLEAR_FORM:

            return initialState;

        default: 

            return state;
    }
}