import React from 'react';
import classnames from 'classnames';
import {RESULTS} from "./TestConst";

const RESULT_BG = require('./../../../../imgs/carTest/result.png')

class ResultCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            rate: 99.99,
            total: 9999,
        }
    }

    componentDidMount() {
        fetch('http://www.dandywei.com/car/query')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    rate: res[this.props.resultKey]
                })
            })
        fetch('http://www.dandywei.com/car/queryCount')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    total: res
                })
            })
    }

    render() {
        const {resultKey} = this.props;
        const {rate, total} = this.state;
        const random = Math.floor(Math.random() * 8) // 0~7
        return (
            <div className="pageCarTest-result">
                <div className='pageCarTest-summary-title'>
                    <div>您是第 <span className="highlight">{total}</span> 位测试者</div>
                    <div>与 <span className="highlight">{rate}%</span> 的测试者选择相同</div>
                </div>
                {/*
                <div className='pageCarTest-result-title'>
                    测试结果
                </div>*/}
                <div className="pageCarTest-result-pic-wrapper">
                <img
                    src={require(`./../../../../imgs/carTest/car/${resultKey}.jpg`)}
                    alt=""
                    className="pageCarTest-result-pic"/>
                </div>
                <div className='pageCarTest-result-content'>
                <div className="pageCarTest-result-rrc">
                    <div className="pageCarTest-result-rrcPic2"
                         style={{backgroundImage: `url(./../../../../imgs/rrc/${random}.png)`}}
                    />
                </div>
                <div className='pageCarTest-result-anwser'>
                    <img src={RESULT_BG} alt="" className="pageCarTest-result-anwser-pic"/>
                    <div className="pageCarTest-result-anwser-content">
                        {RESULTS[resultKey]}
                    </div>
                </div>
                </div>
{/*                <div className="pageCarTest-result-next" onTouchEnd={()=>{
                    this.props.handleNextTouch()
                }}/>*/}
                {/*<img src={NEXT} alt=""/>*/}
            </div>
        )
    }
}

export {
    ResultCard
}
