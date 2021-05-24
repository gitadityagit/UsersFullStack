import React, { Component } from 'react';

class Home extends Component {

    handleAdminLoginClick=()=>{
        this.props.history.push("/admin")
    }
    handleUserLoginClick=()=>{
        this.props.history.push("/user")
    }

    render() {
        return (
            <div className="text-center">
                <button className="m-2 btn btn-success" onClick={this.handleAdminLoginClick}>Admin Login</button><br />
                <button className="m-2 btn btn-danger" onClick={this.handleUserLoginClick}>User Login</button>
            </div>
        );
    }
}

export default Home;