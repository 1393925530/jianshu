import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultStore = fromJS({
    topicList: [],
    articleList: [],
    recomendList: [],
    articlePage: 1,
});

export default (state = defaultStore, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                'topicList': fromJS(action.topicList),
                'articleList': fromJS(action.articleList),
                'recomendList': fromJS(action.recomendList),
            })
        case constants.ADD_ARTICLE_LIST:
            return state.merge({
                'articleList': state.get("articleList").concat(action.list),
                'articlePage': action.nextPage
            })
        default:
            return state;
    }
}