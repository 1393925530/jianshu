import { fromJS } from 'immutable';

const defaultStore = fromJS({
    topicList: [{
        id: 1,
        title: "社会热点",
        imgUrl: "//upload-images.jianshu.io/upload_images/15874461-43b02ba37025dc2e?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    }, {
        id: 2,
        title: "手绘",
        imgUrl: "//upload-images.jianshu.io/upload_images/16222142-2a6f833697804389.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
        }]
});

export default (state = defaultStore, action) => {
    switch (action.type) {
        default:
            return state;
    }
}