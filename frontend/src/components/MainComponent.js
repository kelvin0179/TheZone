import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Dashboard from "./DashboardComponent";
import Header from "./HeaderComponent";
import Login from "./LoginComponent";

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/dashboard" component={() => <Dashboard />} />
                    <Route path="/login" component={() => <Login />} />
                    <Redirect to="/login" />
                </Switch>
            </div>
        );
    }
}

export default Main;