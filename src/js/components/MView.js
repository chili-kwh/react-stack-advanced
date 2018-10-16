import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled, {ThemeProvider} from 'styled-components';
import {getWindowSize} from "../tool";


const PcPhoneBg = () => (
    <div className="pc-phone-bg">
        <div className="pc-phone_bg-top">
            <div className="pc-phone_bg-top-1"/>
            <div className="pc-phone_bg-top-2"/>
        </div>
        <div className="pc-phone_bg-bottom"/>
    </div>
)

const MView = ({children}) => {
    return (
        <div className='MView'>
            {children}
            {getWindowSize().width > 480 && <PcPhoneBg/>}
        </div>
    )
}

export {
    MView
}