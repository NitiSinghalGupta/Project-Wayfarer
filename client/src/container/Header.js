import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {

    onSignOut = () => {
        console.log("signout handler called")
        this.props.history.push('/');
    }

    render(){

        return (
            <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">Wayfarer</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                        <li className="nav-item"> 
                            <a className="nav-link" href="#" onClick={ () => this.props.onModalChange('SignIn') }>SignIn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={ () => this.props.onModalChange('SignUp') } >SignUp <span className="sr-only">(current)</span></a>
                        </li>  
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={ () => this.onSignOut() } >SignOut <span className="sr-only">(current)</span></a>
                        </li>                     
                </ul>
                </div>
            </nav>
            </header>
    
        )
    }
}

const SignOutWithRouter = withRouter(Header);

export default SignOutWithRouter;