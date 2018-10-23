import React from 'react';
import classnames from 'classnames';
import {RESULTS} from "./TestConst";

class SummaryCard extends React.Component {

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
            <div className="pageCarTest-summary">
                <div className='pageCarTest-summary-title'>
                    <div>您是第 <span className="highlight">{total}</span> 位测试者</div>
                    <div>与 <span className="highlight">{rate}%</span> 的测试者选择相同</div>
                </div>
            </div>
        )
    }
}


export {
    SummaryCard
}
