/**
 * Created by Liqi on 18/4/20.
 */
import React from 'react';
import ReactDOM from 'react-dom';


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
            <div
                className={`modal ${visible ? 'fade-in' : 'fade-out'}`}
                onClick={this.props.onClose}>
                {this.props.children}
            </div>
        );

        // if (visible) {
            return ReactDOM.createPortal(
                modal,
                this.el,
            );
        // }
        // return null;

    }
}

export {
    Modal
}