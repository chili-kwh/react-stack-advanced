import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import * as allUrls from "./../setRoutes";
import '../../sass/pages/App.scss';
import {LRoute} from "../LRoute";
import PageHome from "./PageHome";

function MakeRoutes(allUrls) {
    let allRoutes = [];
    Object.keys(allUrls).forEach((key, i) => {
        const _route = allUrls[key];
        if(_route instanceof LRoute){
            console.log(key);
            // console.log(_route);
            allRoutes.push(
                <Route path={_route.path} component={_route.getComponent()} key={i}/>
            )
        }
    });
    return allRoutes;
}


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Redirect exact from="/" to='/fe/home'/>
                        {MakeRoutes(allUrls)}
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
