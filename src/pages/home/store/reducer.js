import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultStore = fromJS({
    topicList: [],
    articleList: [],
    recomendList: []
});

export default (state = defaultStore, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                'topicList': fromJS(action.topicList),
                'articleList': fromJS(action.articleList),
                'recomendList': fromJS(action.recomendList),
            })
        default:
            return state;
    }
}