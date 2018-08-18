import React, { Component } from 'react';



export default class  SignUp extends Component{

    state = {
        signedUp: false,
    };

  
    onSignUp = () => 
    {

        let url = 'http://localhost:3000/signup';

        let htmlEmailElement = document.getElementById('signupEmail');
        let email = htmlEmailElement.value.trim();

        let htmlPasswordElement = document.getElementById('signupPassword');
        let password = htmlPasswordElement.value.trim();

        console.log('email is :' , email);
        console.log('pwd is :' , password);

        fetch(url,{
            method: 'post',
            mode: "cors",
            // body: JSON.stringify(data)
        }).then((response) => {
                return response.json();
            }).then((data) => {            
                this.setState( { signedUp: true  } );
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
                            <h5 className="modal-title">Sign Up</h5>
                            <button type="button" class="close" onClick={()=>{this.props.onClose()}} aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form role="form">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="signupEmail" placeholder="Email"/>
                                        <p class="form-text text-muted error-message">Email required</p>
                                        <p class="form-text text-muted error-message">Invalid Email</p>
                                    <input type="password" className="form-control" id="signupPassword" placeholder="Password" />
                                        <p class="form-text text-muted error-message">Password required</p>
                                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
                                        <p class="form-text text-muted error-message">Re-enter your password to confirm</p>
                                        <p class="form-text text-muted error-message">Passwords do not match</p>
                                    <button className="btn btn-primary btn-block" onClick={this.onSignUp}>Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
