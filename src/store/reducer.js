const defaultStore = {
    focused: false,
};

export default (state = defaultStore, action) => {
    if (action.type === "search_focus") {
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.focused = true;
        return {
            focused: true,
        };
    }
    if (action.type === "search_blur") {
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.focused = true;
        return {
            focused: false,
        };
    }
    return state;
}