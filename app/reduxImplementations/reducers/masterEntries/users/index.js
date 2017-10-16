import { fromJS, List } from 'immutable';
import ConstantBuilder from '../../../constantBuilder';
import { buildNewState } from '../../../reducerStateMiddleware';

var initialState = fromJS({
      'UserList': List([])
});
  
export default function usersReducer(state = initialState, action) {

    const SET_FORM = ConstantBuilder("MASTER_ENTRIES", "USERS_SET_FORM");
    const CLEAR_FORM = ConstantBuilder("MASTER_ENTRIES", "USERS_CLEAR_FORM");

    switch (action.type) {

        case SET_FORM:

            return buildNewState(state, action.data)

        case CLEAR_FORM:

            return state.set("Name", null).set("Password", null).set("Role", null).set("Id", null);

        default: 

            return state;
    }
}