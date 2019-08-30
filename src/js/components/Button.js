import React from 'react';
import PropTypes from 'prop-types';

function substring(str, length = 0, overflow = '...') {
    return `${str.substr(0, length)}${!!str.substr(length) ? overflow : ''}`
}


class Button extends React.Component {

  static propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.number,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    context: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    fontSize: PropTypes.number,
    textLength: PropTypes.number,
    styles: PropTypes.object,
  }

  static defaultProps = {
    width: '100%',
    height: 40,
    context: '',
    bgColor: 'linear-gradient(-90deg, #FFCE06 0%, #FCE21B 100%)',
    textColor: '#333',
    onClick: () => {
    },
    className: null,
    fontSize: 15,
    textLength: null,
    styles: {}
  }

  render() {
    const {width, height, bgColor, textColor, context, onClick, className, fontSize, styles, textLength} = this.props;
    return (
      <div
        style={{
          width: `${width}${`${width}`.indexOf('%') === -1 ? 'px' : ''}`,
          height: `${height}px`,
          background: bgColor,
          borderRadius: `${height / 2}px`,
          lineHeight: `${height}px`,
          color: textColor,
          textAlign: 'center',
          fontSize: `${fontSize}px`,
          ...styles
        }}
        className={className}
        onClick={onClick}
      >
        {!!textLength && substring(context, textLength)}
      </div>
    )
  }


}

export default Button;
