import React from 'react';
import '../../sass/pages/App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {PageHome} from "./PageHome";
import {PageReactPortal} from "./PageReactPortal";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Redirect exact from="/" to='/home'/>
                        <Route path="/home" component={PageHome}/>
                        <Route path="/react-portal" component={PageReactPortal}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
