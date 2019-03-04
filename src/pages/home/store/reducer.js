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
    }],
    articleList: [{
        id: 1,
        title: "刘备死后，诸葛亮为什么屡战屡败？姜维临终前说了8个字！",
        desc: "不管在任何年代，要想让国家繁荣昌盛，一定离不开的就是人才。三国时期可以称得上是人才辈出。 但是有的人才并不愿意掺进这纷杂的乱世，但是无奈于即使自...",
        imgUrl: "//upload-images.jianshu.io/upload_images/16222142-2a6f833697804389.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    }, {
        id: 2,
        title: "刘备死后，诸葛亮为什么屡战屡败？姜维临终前说了8个字！",
        desc: "不管在任何年代，要想让国家繁荣昌盛，一定离不开的就是人才。三国时期可以称得上是人才辈出。 但是有的人才并不愿意掺进这纷杂的乱世，但是无奈于即使自...",
        imgUrl: "//upload-images.jianshu.io/upload_images/16222142-2a6f833697804389.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    }, {
        id: 3,
        title: "刘备死后，诸葛亮为什么屡战屡败？姜维临终前说了8个字！",
        desc: "不管在任何年代，要想让国家繁荣昌盛，一定离不开的就是人才。三国时期可以称得上是人才辈出。 但是有的人才并不愿意掺进这纷杂的乱世，但是无奈于即使自...",
        imgUrl: "//upload-images.jianshu.io/upload_images/16222142-2a6f833697804389.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    }, {
        id: 4,
        title: "刘备死后，诸葛亮为什么屡战屡败？姜维临终前说了8个字！",
        desc: "不管在任何年代，要想让国家繁荣昌盛，一定离不开的就是人才。三国时期可以称得上是人才辈出。 但是有的人才并不愿意掺进这纷杂的乱世，但是无奈于即使自...",
        imgUrl: "//upload-images.jianshu.io/upload_images/16222142-2a6f833697804389.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    }],
    recomendList: [{
        id: 1,
        imgUrl: "//upload.jianshu.io/admin_banners/web_images/4615/62909ce23863ac5f6a1454c7ba407b85af0a17db.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
    }, {
        id: 2,
        imgUrl: "//upload.jianshu.io/admin_banners/web_images/4615/62909ce23863ac5f6a1454c7ba407b85af0a17db.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
    }, {
        id: 3,
        imgUrl: "//upload.jianshu.io/admin_banners/web_images/4615/62909ce23863ac5f6a1454c7ba407b85af0a17db.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
    }, {
        id: 4,
        imgUrl: "//upload.jianshu.io/admin_banners/web_images/4615/62909ce23863ac5f6a1454c7ba407b85af0a17db.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
    }, {
        id: 5,
        imgUrl: "//upload.jianshu.io/admin_banners/web_images/4615/62909ce23863ac5f6a1454c7ba407b85af0a17db.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
    }, {
        id: 6,
        imgUrl: "//upload.jianshu.io/admin_banners/web_images/4615/62909ce23863ac5f6a1454c7ba407b85af0a17db.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
    }]
});

export default (state = defaultStore, action) => {
    switch (action.type) {
        default:
            return state;
    }
}