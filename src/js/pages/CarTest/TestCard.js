import React from 'react';
import classnames from 'classnames';

const BG = require('./../../../../imgs/carTest/bgb.png')

class TestCard extends React.Component {
    static defaultProps = {
        answers: []
    }

    render() {
        const {question, answers, selectIndex, handleChoose} = this.props;
        return (
            <div className="pageCarTest-card">
                <div className="pageCarTest-ques">
                    <img src={BG} alt="" className="pageCarTest-quesImg"/>
                    <div className="pageCarTest-ques-inner">
                        <div className="pageCarTest-ques-title">
                            {question}
                        </div>
                        <div className="pageCarTest-ques-optionWrapper">
                            {
                                answers.map((e, i) => {
                                    return (
                                        <div
                                            style={{transition: `all ${0.7+0.4*i}s cubic-bezier(0.25, 0.8, 0.25, 1)`}}
                                            className={classnames('pageCarTest-ques-option', {'arrow': selectIndex === i})}
                                            key={i}
                                            onTouchEnd={() => {
                                                handleChoose({
                                                    chosenIndex: i,
                                                    questionKey: e.toQues,
                                                    resultKey: e.toResult
                                                })
                                            }}
                                        >
                                            {e.desc}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export {
    TestCard
}
