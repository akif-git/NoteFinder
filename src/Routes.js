import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import history from './history';
import Medicines from "./Medicine/Medicines";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path = "/Medicines" component = {Medicines} />                    
                </Switch>
            </Router>
        )
    }
}
