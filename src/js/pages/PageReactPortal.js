/**
 * Created by Liqi on 18/4/26.
 */

import React from 'react';
import {Modal} from "../components/index";
import {Badge} from 'pand'
import {cube} from './../tool/math.js';


const urlLoaderTest = require("./../../../imgs/redBag_2x.png")
const fileLoaderTest = require("./../../../imgs/banner_flop.png")

class PageReactPortal extends React.Component {
    state = {
        modalVisible: false
    };

    render() {
        const {modalVisible} = this.state;
        // cosnole.error('I get called from print.js!');
        // cosnole.error('I get called from print.j!');
        return (
            <div>
                <div className="test-pic"/>
                <img src={urlLoaderTest} alt=""/>
                <img src={fileLoaderTest} alt=""/>
                {cube(5)}
                <Badge type='text'>Badge test</Badge>
                <p className="App-intro">
                    React Portal Test
                </p>
                <div
                    onClick={() => {
                        this.setState({modalVisible: true})
                    }}>click modal
                </div>
                <Modal
                    visible={modalVisible}
                    onClose={() => {
                        this.setState({modalVisible: false})
                    }}>
                </Modal>
            </div>
        );
    }
}

export default PageReactPortal;