import React from 'react';
import _ from 'underscore';


function Icon({
                  icon,
                  url,
                  width,
                  height = width,
                  onClick = _.noop,
                  className = '',
                  style,
              }) {

    return (
        <div
            className={`icon ${className}`}
            style={{
                ...style,
                width: `${width}px`,
                height: `${height}px`,
                backgroundImage: `url("${url}")`,
            }}
            onClick={onClick}
        />
    );
}


export default Icon
