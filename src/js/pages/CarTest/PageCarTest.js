import React from 'react';
import classnames from 'classnames';
import {MView} from "../../components/index";
import {TestCard} from "./TestCard";
import {QUESTIONS} from "./TestConst";

class PageCarTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currIndex: 0,
            questionMap: [QUESTIONS[1]],
            resultKey: null,
        }
        this.userChoiceArr = []
    }

    componentDidMount() {
        this.initSwiper()
    }

    initSwiper() {
        const _this = this;
        this.mySwiper = new window.Swiper('.swiper-container', {
            direction: 'vertical',
            noSwiping : true,
            on: {
                slideChangeTransitionEnd: function () {
                    _this.setIndex(this.activeIndex)
                },
            },
        });
    }

    setIndex = (index) => {
        this.setState({
            currIndex: index,
        })
    }

    updatePages = (questionKey, resultKey = null) => {
        // 如果传入questionKey，questionMap删除后边问题 && 插入新问题，清空当前答案
        // 如果传入resultKey， questionMap删除后边问题，设置resultKey
        this.setState(
            questionKey
                ? {
                    questionMap: [...this.state.questionMap.slice(0, this.state.currIndex + 1), QUESTIONS[questionKey]],
                    resultKey
                }
                : {
                    questionMap: [...this.state.questionMap.slice(0, this.state.currIndex + 1)],
                    resultKey
                }, () => {
                this.mySwiper.updateSlides();
                this.mySwiper.slideNext();
            })
    }

    saveUserChoice = (chosenIndex) => {
        this.userChoiceArr = this.userChoiceArr.splice(0, this.state.currIndex) //清空后边答案
        this.userChoiceArr[this.state.currIndex] = chosenIndex
    }

    handleToNextPage = ({chosenIndex, questionKey, resultKey}) => {
        if (this.userChoiceArr[this.state.currIndex] !== chosenIndex) { // 答案变了||之前没答过
            this.saveUserChoice(chosenIndex) // 保存答案
            this.updatePages(questionKey, resultKey)
        } else {
            this.mySwiper.slideNext();
        }
    }

    render() {
        const {questionMap} = this.state;
        return (
            <MView>
                <div className="scroll pageCarTest">
                    <div className="pageCarTest-wrapper swiper-container">
                        <div className="swiper-wrapper">
                            {
                                questionMap.map((elem, index) => {
                                    return (
                                        <div className="swiper-slide" key={elem.key}>
                                            <TestCard
                                                question={elem.question}
                                                answers={elem.answers}
                                                selectIndex={this.userChoiceArr[index]}
                                                handleChoose={this.handleToNextPage}
                                            />
                                        </div>
                                    )
                                })
                            }
                            {
                                this.state.resultKey &&
                                <div className="swiper-slide" key={'result'}>
                                    result:
                                    {this.state.resultKey}
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </MView>
        )
    }
}

export default PageCarTest
