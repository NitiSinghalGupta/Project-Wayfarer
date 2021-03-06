import React, { Component } from 'react';
import IfClause from './../component/IfClause';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class SignIn extends Component{

    state = {
        emailInvalid: false,
        emailRequired: false,
        pwdRequired : false,
        pwdInvalid : false,
    };

    checkEmailAddress(email) {
        let index = email.indexOf('@');
        if(index === -1) {
            return false;
        }

        return true;
    }
  
    onSignIn = () => 
    {

        let htmlEmailElement = document.getElementById('signinEmail');
        let email = htmlEmailElement.value.trim();

        // let's hide all error message from previous time
        this.setState( {
            emailRequired : false,
            emailInvalid : false,
            pwdRequired : false,
            pwdInvalid : false,
        })

        // check for errors again
        if(email.length === 0) {
            this.setState({ emailRequired : true });
            return;
        }

        if(!this.checkEmailAddress(email)) {
            this.setState({ emailInvalid : true });
            return;
        }


        let htmlPasswordElement = document.getElementById('signinPassword');
        let password = htmlPasswordElement.value.trim();

        if(password.length === 0) {
            this.setState({ pwdRequired : true });
            return;
        }

        console.log('email is :' , email);
        console.log('pwd is :' , password);

        let url = 'http://localhost:3000/signin';

        axios.post(url, {
            email: email,
            password: password
        }).then((response) => {            
            // this.setState( { signedIn: true  } );
            this.props.onProfileChange(response.data);
            console.log('json data:', response.data);

            // let's go to the profile screen
            this.props.history.push('/profile');
            this.props.onClose();

            //use local storage for signin
            let profile = response.data;
            profile.password = null;
            localStorage.setItem('profile', JSON.stringify(profile));
        }).catch((err) => {              
            console.log('Error retured API SignIn:', err);
        });      

    }    
    
    render (){
        return(
                <div className="modal" id='signinModal' tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Sign In</h5>
                            <button type="button" className="close" data-dismiss="modal" 
                                    onClick={()=>{this.props.onClose()}} 
                                    aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form role="form">
                                <div className="form-group">
                                    <div className="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i className="fa fa-user"></i></div>
                                    </div>
                                       
                                       <input type="text" className="form-control" id="signinEmail" placeholder="Email"/>
                                      
                                    <IfClause condition={ this.state.emailRequired }>
                                        <p className="form-text text-muted error-message">Email required</p>
                                    </IfClause>
                                    <IfClause condition={ this.state.emailInvalid }>
                                        <p className="form-text text-muted error-message">Invalid Email</p>                                    
                                    </IfClause>
                                    </div>
                                    <br/>
                                    <div className="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i className="fa fa-lock"></i>
                                        </div>
                                        </div>
                                    <input type="password" className="form-control" id="signinPassword" placeholder="Password" />
                                    <IfClause condition={ this.state.pwdRequired }>
                                    <p className="form-text text-muted error-message">Password required</p>
                                    </IfClause>
                                    <IfClause condition={ this.state.pwdInvalid }>
                                    <p className="form-text text-muted error-message">Password Incorrect</p>
                                    </IfClause>
                                    </div>
                                    <br/>
                                    <a href='#' className="btn btn-primary btn-block" onClick={ () => this.onSignIn() }>Sign In</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const SignInWithRouter = withRouter(SignIn);

export default SignInWithRouter;
