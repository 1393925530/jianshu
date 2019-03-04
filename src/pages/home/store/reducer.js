import { fromJS } from 'immutable';

const defaultStore = fromJS({
    topicList: [],
    articleList: [],
    recomendList: []
});

export default (state = defaultStore, action) => {
    switch (action.type) {
        case 'change_home_data':
            return state.merge({
                'topicList': fromJS(action.topicList),
                'articleList': fromJS(action.articleList),
                'recomendList': fromJS(action.recomendList),
            })
        default:
            return state;
    }
}