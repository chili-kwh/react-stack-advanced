/**
 * Created by Liqi on 19/8/20.
 */
import React, {Component} from 'react';

class PageCanvas extends Component {

    renderBottle() {
        return (
            <div className='bottle-con'>
                <div className="bg poa"/>
                <div className="bottle-lay poa">
                    <div className="bottle"/>
                </div>
                <div className="wave poa"/>
            </div>
        )
    }

    // TODO 数据细节有待微调
    renderPageFlip() {
        return (
            <div className='wrapper'>

                <div className="container front-container">
                    <div className="front">123</div>
                </div>

                <div className="cover">
                    <div className="container back-container anim">
                        <div className="back">456</div>
                    </div>
                    {/*<div className="container">*/}
                    {/*<div className="front">123</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='wrap'>
                {this.renderBottle()}
                {this.renderPageFlip()}
            </div>
        )
    }

}


export default PageCanvas;

