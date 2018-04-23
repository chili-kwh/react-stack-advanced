/**
 * Created by Liqi on 18/4/20.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';


const root = document.getElementById('root');

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        root.appendChild(this.el);
    }

    componentWillUnmount() {
        root.removeChild(this.el);
    }

    render() {
        const {visible} = this.props;

        const modal = (
            <CSSTransition
                in={visible}
                timeout={300}
                classNames='modal-transition'
                mountOnEnter
                // unmountOnExit 在完成退出后卸载组件。默认情况下，子组件在达到“退出”状态后保持挂载状态
            >
                <div
                    className='modal'
                    onClick={this.props.onClose}>
                    {this.props.children}
                </div>
            </CSSTransition>
        );

        return ReactDOM.createPortal(
            modal,
            this.el,
        );

    }
}

export {
    Modal
}