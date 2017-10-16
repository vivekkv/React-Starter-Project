import { fromJS, List } from 'immutable';
import ConstantBuilder from '../../constantBuilder';
import { buildNewState } from '../../reducerStateMiddleware';

var initialState = fromJS({
    'UserAuthenticated': false
});
  
export default function userReducer(state = initialState, action) {

    const SET_FORM = ConstantBuilder("AUTH", "USER_SET_FORM");
    const CLEAR_FORM = ConstantBuilder("AUTH", "USER_CLEAR_FORM");

    switch (action.type) {

        case SET_FORM:

            return buildNewState(state, action.data);

        case CLEAR_FORM:

            return initialState;

        default: 

            return state;
    }
}