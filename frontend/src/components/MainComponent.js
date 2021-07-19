import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Dashboard from "./DashboardComponent";
import Header from "./HeaderComponent";
import Login from "./LoginComponent";
import { connect } from 'react-redux';
import { fetchUser, postLoginUser, postRegisterUser } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        logins: state.logins
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchUser: () => { dispatch(fetchUser()) },
    postLoginUser: (name, email, password) => { dispatch(postLoginUser(name, email, password)) },
    postRegisterUser: (name, email, password, password2) => { dispatch(postRegisterUser(name, email, password, password2)) }
});

class Main extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchUser();
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));