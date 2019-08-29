import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';


function HocAutoShow(Component, options) {

    return class AutoShow extends React.PureComponent {
        static propTypes = {
            showWhenScrollTo: PropTypes.number,
            onVisibilityChange: PropTypes.func,
        }

        static defaultProps = {
            showWhenScrollTo: 0,
            onVisibilityChange: _.noop
        }

        constructor(props) {
            super(props);
            this.state = {
                show: false,
            };
        }

        componentDidMount = async () => {
            window.addEventListener('scroll', this.handleScroll);
        }

        componentDidUpdate() {
            this.props.onVisibilityChange(this.state.show)
        }

        componentWillUnmount() {
            window.removeEventListener('scroll', this.handleScroll);
        }

        handleScroll = _.throttle(() => {
            const show = window.scrollY > this.props.showWhenScrollTo;
            if (show) {
                this.setState({ show: true });
            } else {
                this.setState({ show: false });
            }
        }, 50)


        render() {
            return <Component visible={this.state.show} {...this.props} />;
        }
    };
}

export default HocAutoShow;
