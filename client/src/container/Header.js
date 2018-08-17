import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
                    {/* <Link className="nav-link" to="/Home"> */}
                        <li className="nav-item"> 
                            <a className="nav-link" href="#" onClick={ () => this.props.onModalChange('signinSignup') }>Sign In</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={ () => this.props.onModalChange('signinSignup') } href="#">Sign Up <span className="sr-only">(current)</span></a>
                        </li>  
                    {/* </Link>                   */}
                </ul>
                </div>
            </nav>
            </div>
    
        )
    }
}

