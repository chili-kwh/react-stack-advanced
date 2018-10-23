import React from 'react';
import classnames from 'classnames';
import {MView} from "../../components/index";
import {TestCard} from "./TestCard";
import {QUESTIONS, RESULTS} from "./TestConst";
import {ResultCard} from "./ResultCard";
import {SummaryCard} from "./SummaryCard";

class PageCarTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currIndex: 0,
            questionMap: [],
            resultKey: null,
        }
        this.userChoiceArr = []
    }

    componentDidMount() {
        this.initSwiper()
        // const bgmusic = document.getElementById('audio');
        // bgmusic.play()
    }

    postResult(resultKey) {
        if(resultKey){
            fetch(`http://www.dandywei.com/car/test?key=${resultKey}`)
        }
    }

    initSwiper() {
        const _this = this;
        this.mySwiper = new window.Swiper('.swiper-container', {
            direction: 'vertical',
            // noSwiping : true, // TODO: 不好使？？
            // noSwipingClass : 'swiper-no-swiping',
            on: {
                slideChangeTransitionEnd: function () {
                    _this.setIndex(this.activeIndex - 1) //除掉首页
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
        this.postResult(resultKey)
        if (this.userChoiceArr[this.state.currIndex] !== chosenIndex) { // 答案变了||之前没答过
            this.saveUserChoice(chosenIndex) // 保存答案
            this.updatePages(questionKey, resultKey)
        } else {
            this.mySwiper.slideNext();
        }
    }

    handleStartTest = () => {
        this.updatePages(1)
    }

    render() {
        const {questionMap} = this.state;
        return (
            <MView>
                <embed height="0" width="0" src="http://img.tukuppt.com/preview_music/00/00/95/yulan-5b87c07c7da533189.mp3" style={{display: 'hidden'}}></embed>
                <div className="scroll pageCarTest">
{/*                    <audio id="audio" src="./../../../../music/bgm.mp3" loop='loop' preload='preload'
                           autoPlay="autoplay">
                    </audio>*/}
                    <div className="pageCarTest-wrapper swiper-container">
                        <div className="swiper-wrapper">
                            <div className="pageCarTest-swiper swiper-slide swiper-no-swiping" key='frontPage'>
                                <div className="pageCarTest-frontPage">
                                    <div className="pageCarTest-frontPage-btnWrapper">
                                        <div className="btn" onTouchEnd={this.handleStartTest}>立即测试</div>
                                    </div>
                                </div>

                            </div>
                            {
                                questionMap.map((elem, index) => {
                                    return (
                                        <div className="pageCarTest-swiper swiper-slide" key={elem.key}>
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
                                <div className="pageCarTest-swiper swiper-slide" key='resultPage'>
                                    <ResultCard resultKey={this.state.resultKey} handleNextTouch={()=>{this.mySwiper.slideNext()}}/>
                                </div>
                            }
                            {
                                this.state.resultKey &&
                                <div className="pageCarTest-swiper swiper-slide" key='summaryPage'>
                                    <SummaryCard resultKey={this.state.resultKey}/>
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
