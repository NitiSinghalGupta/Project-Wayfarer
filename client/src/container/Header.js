import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import IfClause from './../component/IfClause';

class Header extends Component {

    signOutClickHandler = () => {
        this.props.onProfileChange(null);
        localStorage.removeItem('profile');
        this.props.history.push('/');
    }

    profileClickHandler = () => {
        this.props.history.push('/profile');
    }

    homeClickHandler = () => {
        this.props.history.push('/home');
    }

    render(){

        return (
            <header className='mb-auto'>
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
                                <a className="nav-link" href="#" onClick={ () => this.props.onModalChange('SignUp') }>SignUp</a>
                            </li>  
                        </IfClause>

                        <IfClause condition={ this.props.profile != null }>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={ () => this.homeClickHandler() } >Home</a>
                            </li>   
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={ () => this.profileClickHandler() } >Profile</a>
                            </li>   
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={ () => this.signOutClickHandler() } >SignOut</a>
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