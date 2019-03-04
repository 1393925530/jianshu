import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <div>
                <RecommendWrapper>
                    {
                        list.map((item)=>(
                            <RecommendItem imgUrl={item.get("imgUrl")} key={item.get("id")}/>
                        ))
                    }
                </RecommendWrapper>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(["home", "recomendList"]),
})

export default connect(mapState, null)(Recommend);