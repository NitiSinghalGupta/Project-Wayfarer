import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import IfClause from './../component/IfClause';

class Header extends Component {

    // onSignOut = () => {
    //     console.log("signout handler called")
    //     this.props.history.push('/');

    // }

    signOutClickHandler = () => {
        this.props.onProfileChange(null);
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
                        <IfClause condition={ !this.props.profile }>
                            <li className="nav-item"> 
                                <a className="nav-link" href="#" onClick={ () => this.props.onModalChange('SignIn') }>SignIn</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={ () => this.props.onModalChange('SignUp') }>SignUp <span className="sr-only">(current)</span></a>
                            </li>  
                        </IfClause>

                        <IfClause condition={ this.props.profile != null }>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={ () => this.signOutClickHandler() } >SignOut <span className="sr-only">(current)</span></a>
                            </li>   
                        </IfClause>                  
                    </ul>
                    </div>
                </nav>
            </header>
    
        )
    }
}

const SignOutWithRouter = withRouter(Header);

export default SignOutWithRouter;