import React, { Component } from 'react';
import AuthService from './AuthService';
import DataService from './../api/DataService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UsersList extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
        }
    }
    handleAddClicked=()=>{
        this.props.history.push("/users/-1")
    }

    handleUpdateClicked=(id)=>{
        this.props.history.push(`/users/${id}`)
    }

    handleDeleteClicked=(id)=>{
        DataService.deleteUser(id).then(response=>{
            this.refreshList();

            toast.success(`User Successfully Deleted!`);
        })
    }

    componentDidMount = () => {
        this.refreshList();
    }

    refreshList() {
        DataService.retrieveAllUsers()
            .then(response => {
                this.setState({
                    list: response.data
                })
            })
    }
    render() {
        return (
            <div className="container">
                <div className="text-center m-3">
                    {AuthService.isAdmin() && <button className="btn btn-warning" onClick={() => this.handleAddClicked()}>Add User</button>}
                </div>
                <table className="table text-center">
                    <thead>
                        <tr>
                            {AuthService.isAdmin() && <th>Update</th> }
                            {AuthService.isAdmin() && <th>Delete</th> }  
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list.map(user=>{
                                return(
                                    <tr key={user.id}>
                                        {AuthService.isAdmin() && <td><button className="btn btn-success" onClick={()=> this.handleUpdateClicked(user.id)}>Update</button></td> }
                                        {AuthService.isAdmin() && <td><button className="btn btn-danger" onClick={()=> this.handleDeleteClicked(user.id)}>Delete</button></td> }
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <ToastContainer />
            </div>
        );
    }
}

export default UsersList;