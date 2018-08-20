import React, { Component } from 'react';
import IfClause from './../component/IfClause';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class  SignUp extends Component{

    state = {
        signedUp: false,
        emailInvalid: false,
        emailRequired: false,
        pwdRequired : false,
        pwdInvalid : false,
        pwdNotSame : false,
        
    };

    checkEmailAddress(email) {
        let index = email.indexOf('@');
        if(index === -1) {
            return false;
        }

        return true;
    }

    onSignUp = () => 
    {
        // let's hide all error message from previous time
        this.setState( {
            emailRequired : false,
            emailInvalid : false,
            pwdRequired : false,
            pwdInvalid : false,
            pwdNotSame : false,
        })

        let htmlEmailElement = document.getElementById('signupEmail');
        let email = htmlEmailElement.value.trim();

        // check for errors again
        if(email.length === 0) {
            this.setState({ emailRequired : true });
            return;
        }

        if(!this.checkEmailAddress(email)) {
            this.setState({ emailInvalid : true });
            return;
        }

        let htmlPasswordElement = document.getElementById('signupPassword');
        let password = htmlPasswordElement.value.trim();

        if(password.length === 0) {
            this.setState({ pwdRequired : true });
            return;
        }

        let htmlCpasswordElement = document.getElementById('confirmPassword');
        let cpwd = htmlCpasswordElement.value.trim();

        console.log('pwd: ', password, cpwd);

        if(password !== cpwd) {
            this.setState({ pwdNotSame : true });
            return;
        }

        console.log('email is :' , email);
        console.log('pwd is :' , password);

        let url = 'http://localhost:3000/signup';

        let ls = localStorage;

        let key = {
            email: email,
            password: password
        }

        // axios.post(url, {
        //     email: email,
        //     password: password
        // }).then((data) => {     
            axios.post(url, key).then((data) => {              
            this.setState( { signedUp: true  } );
            console.log('json data:', data);
            this.props.history.push('/home');
            this.props.onClose();
            ls.setItem('email', email)
             
            //implementing local storage upon signup
            ls.getItem('email');

        }).catch((err) => {              
            console.log('Error retured API in signUp:', err);
        });

    }    
    
    render (){
        return(
                <div className="modal" id='signUpModal' tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Sign Up</h5>
                            <button type="button" className="close" onClick={()=>{this.props.onClose()}} aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form role="form">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="signupEmail" placeholder="Email"/>
                                    <IfClause condition={ this.state.emailRequired }>
                                        <p className="form-text text-muted error-message">Email required</p>
                                    </IfClause>    
                                    <IfClause condition={ this.state.emailInvalid }>
                                        <p className="form-text text-muted error-message">Invalid Email</p>
                                    </IfClause>    
                                    <input type="password" className="form-control" id="signupPassword" placeholder="Password" />
                                    <IfClause condition={ this.state.pwdRequired }>
                                        <p className="form-text text-muted error-message">Password required</p>
                                    </IfClause>    
                                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
                                    <IfClause condition={ this.state.pwdRequired }>
                                        <p className="form-text text-muted error-message">Re-enter your password to confirm</p>
                                    </IfClause>    
                                    <IfClause condition={ this.state.pwdNotSame }>
                                        <p className="form-text text-muted error-message">Passwords do not match</p>
                                    </IfClause>    
                                    <a className="btn btn-primary btn-block" onClick={this.onSignUp}>Sign Up</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


const SignUpWithRouter = withRouter(SignUp);

export default SignUpWithRouter;