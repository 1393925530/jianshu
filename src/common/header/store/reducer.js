import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultStore = fromJS({
    focused: false,
    list: []
});

export default (state = defaultStore, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.focused = true;
        //immutable对象的set方法，会结合之前的immutable对象的值
        //和设置的值，返回一个全新的对象
        return state.set('focused', true);
    }
    if (action.type === constants.SEARCH_BLUR) {
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.focused = true;
        return state.set('focused', false);
    }
    if (action.type === constants.CHANGE_LIST) {
        return state.set('list', action.data);
    }
    return state;
}