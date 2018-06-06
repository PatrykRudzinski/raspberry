import React from 'react';
import {
    HashRouter,
    Route,
    Switch
  } from 'react-router-dom';
import {Navigation} from "./navigation.jsx";

class Routing extends React.Component{

    render() {
        return <HashRouter>
            <div>
                <Navigation/>
                <Switch>
                    {/*<Route exact path='/' component={Home}/>*/}
                    <Route path='*' component={NotFound}/>
                </Switch>
            </div>
        </HashRouter>;
    }
}

export {Routing}
