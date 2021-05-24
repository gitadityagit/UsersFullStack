import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
import AuthService from './AuthService';

class AuthenticatedUser extends Component {
    render() {
        if (AuthService.isLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/" />
        }
    }
}

export default AuthenticatedUser;