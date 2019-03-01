import * as constants from './constants';

const defaultStore = {
    focused: false,
};

export default (state = defaultStore, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.focused = true;
        return {
            focused: true,
        };
    }
    if (action.type === constants.SEARCH_BLUR) {
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.focused = true;
        return {
            focused: false,
        };
    }
    return state;
}