import { combineReducers } from 'redux-immutable';//state为immutable对象
import { reducer as headerReducer } from '../common/header/store';

const reducer = combineReducers({
    header: headerReducer
})

export default reducer;