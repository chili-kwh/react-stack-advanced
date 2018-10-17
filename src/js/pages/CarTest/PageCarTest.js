import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {getWindowSize} from "../../tool/index";
import {MView} from "../../components/index";
import {TestCard} from "./TestCard";
import {QUESTIONS} from "./TestConst";

class PageCarTest extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currIndex: 0,
            questionMap: [QUESTIONS[1]]
        }
    }

    componentDidMount() {
        this.initSwiper()
    }

    initSwiper() {
        const initOptions = {
            direction: 'vertical',
            // TODO：禁止后滑
            // allowSlideNext : false,
            // speed: 300,
            // observer: true,
            // onSlideChangeStart: (swiper) => {
            //     this.setIndex(swiper.realIndex);
            // },
            // onSlideChangeEnd: (swiper) => {
            //     this.setIndex(swiper.realIndex);
            // },
            on:{
                slidePrevTransitionEnd: this.handleToPrevPage
            },
        };
        this.mySwiper = new window.Swiper('.swiper-container', initOptions);
        // this.setIndex(this.mySwiper.realIndex);
    }

    handleToPrevPage = () => {
        this.state.currIndex >=1 && //TODO
        this.setState({
            currIndex: this.state.currIndex - 1,
            questionMap: [...this.state.questionMap.slice(0,-1)]
        }, ()=>{
            this.mySwiper.updateSlides();
        })
    }

    handleToNextPage = (pageKey) => {
        console.log(pageKey)
        this.setState({
            currIndex: this.state.currIndex + 1,
            questionMap: [...this.state.questionMap, QUESTIONS[pageKey]]
        }, ()=>{
            this.mySwiper.updateSlides();
            this.mySwiper.slideNext();
        })
    }

    handleToResultPage = (resultKey)=>{
        console.log(resultKey)
    }


    render() {
        const {questionMap} = this.state;
        return (
            <MView>
                <div className="scroll pageCarTest">
                    <div className="pageCarTest-wrapper swiper-container">
                        <div className="swiper-wrapper">
                        {
                            questionMap.map(elem=>{
                                // const elem = questionMap[key]
                                const answerArr = elem.answers.map(e=>e.desc)
                                console.log(answerArr)
                                const handleArr = elem.answers.map(e=>{
                                    if(e.toQues){
                                        return ()=>this.handleToNextPage(e.toQues)
                                    }
                                    if(e.toResult){
                                        return ()=>this.handleToResultPage(e.toResult)
                                    }
                                })
                                console.log(handleArr)

                                return (
                                    <div className="swiper-slide" key={elem.key}>
                                        <TestCard
                                            question={elem.question}
                                            answers={answerArr}
                                            handles={handleArr}
                                        />
                                    </div>
                                )
                            })
                        }
                        </div>

                    </div>
                </div>
            </MView>
        )
    }
}

export default PageCarTest
