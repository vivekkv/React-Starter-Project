import { fromJS, List } from 'immutable';
import ConstantBuilder from '../../constantBuilder';
import { buildNewState } from '../../reducerStateMiddleware';

var initialState = fromJS({
});
  
export default function loginReducer(state = initialState, action) {

    const SET_FORM = ConstantBuilder("AUTH", "LOGIN_SET_FORM");
    const CLEAR_FORM = ConstantBuilder("AUTH", "LOGIN_CLEAR_FORM");

    switch (action.type) {

        case SET_FORM:

            return buildNewState(state, action.data);

        case CLEAR_FORM:

            return initialState;

        default: 

            return state;
    }
}