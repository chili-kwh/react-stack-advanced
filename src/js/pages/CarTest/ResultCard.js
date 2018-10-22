import React from 'react';
import classnames from 'classnames';
import {RESULTS} from "./TestConst";

const NEXT = require('./../../../../imgs/carTest/next.png')
const RESULT_BG = require('./../../../../imgs/carTest/result.png')


class ResultCard extends React.Component {

    render() {
        const {resultKey} = this.props;
        const random = Math.floor(Math.random() * 8) // 0~7
        return (
            <div className="pageCarTest-result">
                <div className='pageCarTest-result-title'>
                    测试结果
                </div>
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
                {/*<img src={NEXT} alt=""/>*/}
            </div>
        )
    }
}

export {
    ResultCard
}
