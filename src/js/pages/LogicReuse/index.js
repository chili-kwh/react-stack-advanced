import React, {Component} from 'react';
import {Icon} from "../../components";
import HocAutoShow from "./HOC";

const FLOAT_ICON = 'http://a.58cdn.com.cn/app58/img/neighbourhood/springactivity/home/float_icon.png';

/*
Input:
onVisibilityChange
showWhenScrollTo

Output:
visible
*/

function handleVisibilityChange(visible) {
    console.log(visible)
}

function FixedIcon({visible = false}) {
    return (
        <Icon
            className={`fixedIcon ${visible ? 'show' : 'hide'}`}
            url={FLOAT_ICON}
            width={70}
        />
    )
}

const HocIcon = HocAutoShow(FixedIcon)

class Index extends Component {


    renderIconHoc() {
        return (
            <HocIcon
                showWhenScrollTo={300}
                onVisibilityChange={handleVisibilityChange}
            />
        )

    }

    /*renderIconHoc() {
        return (
            <FixedIcon></FixedIcon>
        )
    }*/

    render() {
        return (
            <div className='logicReuse-container'>
                <div className="logicReuse-placeholder"/>
                <div className="logicReuse-btn">300</div>
                {this.renderIconHoc()}

            </div>
        );
    }
}

export default Index;