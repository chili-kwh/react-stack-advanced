/**
 * Created by Liqi on 18/4/26.
 */

import React from 'react';
import {Modal} from "../components/index";


class PageReactPortal extends React.Component {
    state = {
        modalVisible: false
    };

    render() {
        const {modalVisible} = this.state;
        return (
            <div>
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