import React, { Component } from 'react';
import AuthService from './AuthService'
import {toast ,ToastContainer} from 'react-toastify'

class UserLoginComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: '',
            isValid:true
        }
    }

    handleUserUsernamePassword=(attr)=>{
        this.setState({
            [attr.target.name]:attr.target.value
        })
    }


    handleUserLoginSubmit=()=>{
        if(this.state.username==='sarthi' && this.state.password==='dhanraj'){
            AuthService.registerSuccessfulLogin(this.state.username,"user");
            this.props.history.push(`/welcome/${this.state.username}`)
        }else{
            toast.error("Invalid User Credentials!")
        }   
    }
    render() {
        return (
            <div className=" container text-center">
                {!this.state.isValid && <h6 className="alert alert-danger">Invalid Credentials !</h6>}
                Username : <input type="text" name="username" onChange={this.handleUserUsernamePassword} value={this.state.username} className="m-2" /><br />
                Password : <input type="password" name="password" onChange={this.handleUserUsernamePassword} value={this.state.password} className="m-2" /><br />
                <button className="btn btn-primary" onClick={this.handleUserLoginSubmit}>Submit</button>
                <ToastContainer />
            </div>
        );
    }
}

export default UserLoginComponent;