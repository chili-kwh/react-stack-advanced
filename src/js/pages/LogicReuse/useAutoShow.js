import React, {useState, useEffect} from 'react';
import _ from "underscore";


function useAutoShow({showWhenScrollTo, onVisibilityChange}) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const handleScroll = _.throttle(() => {
            const show = window.scrollY > showWhenScrollTo;
            if (show) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }, 50)

        window.addEventListener('scroll', handleScroll);

        onVisibilityChange(visible);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [visible]) // 第二个可选参数: 某些特定值在两次重渲染之间没有发生变化，React 跳过对 effect 的调用

    return visible;
}

export default useAutoShow

