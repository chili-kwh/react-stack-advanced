import React from 'react';
import {getWindowSize} from "../../tool";

class TestCard extends React.Component {
    static defaultProps = {
        answers: []
    }

    render() {
        const {question, answers, handles} = this.props;
        return (
            <div className="pageCarTest-page">
                {question}
                {
                    answers.map((e, i) => {
                        return (
                            <div
                                key={i}
                                onTouchEnd={handles[i]}
                            >
                                {e}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export {
    TestCard
}
//style={{height: getWindowSize().height}}