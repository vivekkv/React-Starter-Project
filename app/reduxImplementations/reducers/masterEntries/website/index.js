import { fromJS, List } from 'immutable';
import ConstantBuilder from '../../../constantBuilder';
import { buildNewState } from '../../../reducerStateMiddleware';

var initialState = fromJS({
      'WebsiteList': List([])
});
  
export default function websiteReducer(state = initialState, action) {

    const SET_FORM = ConstantBuilder("MASTER_ENTRIES", "WEBSITE_SET_FORM");
    const CLEAR_FORM = ConstantBuilder("MASTER_ENTRIES", "WEBSITE_CLEAR_FORM");

    switch (action.type) {

        case SET_FORM:

            return buildNewState(state, action.data)

        case CLEAR_FORM:

            return state.set("Category", null).set("CN", null).set("Website", null).set("Id", null);

        default: 

            return state;
    }
}