import * as constants from "../../../store/constants";
import { fromJS } from 'immutable'

const defaultState = fromJS({
        focused: false,
        mouseIn: false,
        list:[],
        page:1,
        totalPage:1
});

export default (state=defaultState,action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused',true);
        case constants.SEARCH_BLUR:
            return state.set('focused',false);
        case constants.CHANGE_DATA:
            return state.merge({
                'list':action.value,
                'totalPage':action.totalPage
            });
        case constants.HANDLE_MOUSE_IN:
            return state.set('mouseIn',true);
        case constants.HANDLE_MOUSE_OUT:
            return state.set('mouseIn',false);
        case constants.CHANGE_PAGE:
            return state.set('page',action.value);
        default:
            return state;
    }
}