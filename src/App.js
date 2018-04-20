import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './sass/index.css';
import {Modal} from "./js/components";

function Child() {
    return (
        <div style={{color: '#fff'}}>
            Child
        </div>
    )
}

class App extends Component {
    state = {
        modalVisible: false
    }

    render() {
        const {modalVisible} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
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
                    <Child/>
                </Modal>
            </div>
        );
    }
}

export default App;
