import React, {Component} from 'react';
import {Icon} from "../../components";
import HocAutoShow from "./HOC";
import AutoShow from "./renderProp";
import useAutoShow from "./useAutoShow";

const FLOAT_ICON = 'http://a.58cdn.com.cn/app58/img/neighbourhood/springactivity/home/float_icon.png';

/*
Input:
showWhenScrollTo
onVisibilityChange

Output:
visible
*/

function handleVisibilityChange(visible) {
    console.log('visible: ' + visible)
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


function FixedIconHooked(props){
    const visible = useAutoShow(props);
    return <FixedIcon visible={visible}/>
}


class Index extends Component {

    renderIconHoc() {
        const HocIcon = HocAutoShow(FixedIcon)

        return (
            <HocIcon
                showWhenScrollTo={300}
                onVisibilityChange={handleVisibilityChange}
            />
        )

    }

    renderIconProps() {
        return (
            <AutoShow
                showWhenScrollTo={200}
                onVisibilityChange={handleVisibilityChange}
            >
                {(visible) => <FixedIcon visible={visible}/>}
            </AutoShow>
        )
    }

    renderIconHook () {
        return (
            <FixedIconHooked
                showWhenScrollTo={300}
                onVisibilityChange={handleVisibilityChange}
            />
        )
    }

    render() {
        return (
            <div className='logicReuse-container'>
                <div className="logicReuse-placeholder"/>
                <div className="logicReuse-btn"/>

                {this.renderIconHoc()}
                {/*{this.renderIconProps()}*/}
                {this.renderIconHook()}
            </div>
        );
    }
}

export default Index;
