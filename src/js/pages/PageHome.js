/**
 * Created by Liqi on 18/4/26.
 */

import React from 'react';
import {Link} from 'react-router-dom'


class PageHome extends React.Component {
    render() {
        return (
            <div>
                <Link to="/fe/react-portal">portal</Link>
            </div>
        );
    }
}

export default PageHome;