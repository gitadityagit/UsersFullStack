import React, { Component } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import AuthService from './AuthService';

class AdminLoginComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: '',
        }
    }

    handleAdminUsernamePassword=(attr)=>{
        this.setState({
            [attr.target.name]:attr.target.value
        })
    }

    handleAdminLoginSubmit=()=>{
        if(this.state.username==='aditya' && this.state.password==='dhanraj'){
            AuthService.registerSuccessfulLogin(this.state.username,"admin");

            this.props.history.push(`welcome/${this.state.username}`)
        }else{
            toast.error("Invalid Admin Credentials!")
        }   
    }

    

    render() {
        return (
            <div>
                <div className="container text-center">
                    Username : <input type="text" name="username" onChange={this.handleAdminUsernamePassword} value={this.state.username} className="m-2" /><br />
                    Password : <input type="password" name="password" onChange={this.handleAdminUsernamePassword} value={this.state.password} className="m-2" /><br />
                    <button className="btn btn-primary" onClick={this.handleAdminLoginSubmit}>Submit</button>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

export default AdminLoginComponent;