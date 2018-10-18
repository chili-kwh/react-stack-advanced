import React from 'react';

class TestCard extends React.Component {
    static defaultProps = {
        answers: []
    }

    render() {
        const {question, answers, selectIndex, handleChoose} = this.props;
        return (
            <div className="pageCarTest-page">
                {question}
                userAnswer: {selectIndex}
                <div className="swiper-no-swiping">
                    {
                        answers.map((e, i) => {
                            return (
                                <div
                                    key={i}
                                    onTouchEnd={() => {
                                        handleChoose({
                                            chosenIndex: i,
                                            questionKey: e.toQues,
                                            resultKey: e.toResult
                                        })
                                    }}
                                    style={{color: selectIndex === i ? '#fff' : '#000'}}
                                >
                                    {e.desc}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export {
    TestCard
}
