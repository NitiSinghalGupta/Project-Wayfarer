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

    postClickHandler = () => {
        this.props.history.push('/posts');
    }

    homeClickHandler = () => {
        this.props.history.push('/home');
    }

    homeOrLandingHandler = () => {
        if(this.props.profile != null) {
            this.props.history.push('/home');
            return;
        }

        this.props.history.push('/');
    }

    render(){
        console.log('profile: ', this.props.profile);

        return (
            <header className='mb-auto'>
            
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#" onClick={ this.homeOrLandingHandler }>Wayfarer</a>
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
                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#"  welcomeNoteHandler={ this.welcomeNoteHandler } >Welcome, {this.props.profile ? this.props.profile.email : ''}</a>
                                </li>                           
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={ () => this.homeClickHandler() } >Home</a>
                                </li> 
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={ () => this.postClickHandler() } >Posts</a>
                                </li>   
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={ () => this.profileClickHandler() } >Profile</a>
                                </li>   
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={ () => this.signOutClickHandler() } >SignOut</a>
                                </li>   
                            </ul>    
                        </IfClause>     
                                         
                    </ul>
                </nav>
            </header>
    
        )
    }
}

const SignOutWithRouter = withRouter(Header);

export default SignOutWithRouter;