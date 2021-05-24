import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import { Route, Switch } from 'react-router';
import AdminLoginComponent from './components/AdminLoginComponent';
import UserLoginComponent from './components/UserLoginComponent';
import WelcomeComponent from './components/WelcomeComponent';
import HeaderComponent from './components/HeaderComponent'
import UsersList from './components/UsersList'
import User from './components/User'

class App extends Component {
  render() {
    return (
      <div>
          <Route component={HeaderComponent}></Route>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/admin" component={AdminLoginComponent} />
              <Route exact path="/welcome/:name" component={WelcomeComponent} />
              <Route exact path="/users/" component={UsersList} />
              <Route exact path="/users/:id" component={User} />
              <Route exact path="/user" component={UserLoginComponent} />
          </Switch>

      </div>
    );
  }
}

export default App;