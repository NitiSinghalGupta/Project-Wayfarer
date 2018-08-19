import React, { Component } from 'react';
import IfClause from './../component/IfClause';


export default class  SignIn extends Component{

    state = {
        signedIn: false,
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

        let url = 'http://localhost:3000/signin';

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

        if(password.length < 5 ) {
            this.setState({ pwdInvalid : true });
            return;
        }        

        console.log('email is :' , email);
        console.log('pwd is :' , password);

        fetch(url,{
            method: 'post',
            mode: "cors",
            // body: JSON.stringify(data)
        }).then((response) => {
                return response.json();
            }).then((data) => {            
                this.setState( { signedIn: true  } );
                console.log('json data:', data);
            }).catch((err) => {              
                console.log('Error retured API:', err);
            });
        }    
    
    render (){
        return(
                <div className="modal" id='signinModal' tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Sign In</h5>
                            <button type="button" className="close" onClick={()=>{this.props.onClose()}} aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form role="form">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="signinEmail" placeholder="Email"/>
                                    
                                    <IfClause condition={ this.state.emailRequired }>
                                        <p className="form-text text-muted error-message">Email required</p>
                                    </IfClause>
                                    <IfClause condition={ this.state.emailInvalid }>
                                        <p className="form-text text-muted error-message">Invalid Email</p>                                    
                                    </IfClause>

                                    <input type="password" className="form-control" id="signinPassword" placeholder="Password" />
                                    <IfClause condition={ this.state.pwdRequired }>
                                    <p className="form-text text-muted error-message">Password required</p>
                                    </IfClause>
                                    <IfClause condition={ this.state.pwdInvalid }>
                                    <p className="form-text text-muted error-message">Password Incorrect</p>
                                    </IfClause>
                                    <button className="btn btn-primary btn-block" onClick={ () => this.onSignIn() }>Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
