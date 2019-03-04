import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommendList, RecommendItem } from '../style';

class Recommend extends Component {
    render() {
        const { list } = this.props;
        return (
            <div>
                <RecommendList>
                    {
                        list.map((item) => (
                            <RecommendItem key={item.get("id")}>
                                <img
                                    className="pic"
                                    alt=""
                                    src={item.get("imgUrl")}
                                />
                            </RecommendItem>
                        )
                        )
                    }
                </RecommendList>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(["home", "recomendList"]),
})

export default connect(mapState, null)(Recommend);