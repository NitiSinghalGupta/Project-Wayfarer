import React, { Component } from 'react';
import SigninSignup from '../Modal/SigninSignup';

export default class Header extends Component {

    render(){

        return (
            <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">Wayfarer</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="modal" data-target="#signinModal" href="#">Sign In <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="modal" data-target="#signinModal" href="#">Sign Up <span className="sr-only">(current)</span></a>
                    </li>                    
                </ul>
                </div>
            </nav>
            <SigninSignup />
            </div>
    
        )
    }
}

