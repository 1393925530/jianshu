import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends PureComponent {

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt="" className="banner-image" src="//upload.jianshu.io/admin_banners/web_images/4615/62909ce23863ac5f6a1454c7ba407b85af0a17db.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
                
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }

}

const mapState = (state) => ({
    showScroll: state.getIn(["home", "showScroll"]),
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
})

export default connect(mapState, mapDispatch)(Home);