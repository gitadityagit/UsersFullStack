import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from './AuthService'


class HeaderComponent extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">

                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#">Users App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    {AuthService.isLoggedIn() && <Link to={`welcome/${AuthService.getAuthenticatedUser()}`} className="nav-link">Home</Link>}
                                </li>
                                <li className="nav-item">
                                    {AuthService.isLoggedIn() && <Link to="/users" className="nav-link">Users</Link>}
                                </li>
                            </ul>

                            <form className="d-flex">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        {AuthService.isLoggedIn() && <Link to="/" className="nav-link" onClick={AuthService.logout}>Logout</Link>}
                                    </li>
                                </ul>
                            </form>

                        </div>

                    </div>

                </nav>
            </>
        )
    }
}

export default HeaderComponent;