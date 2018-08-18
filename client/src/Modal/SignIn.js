import React, { Component } from 'react';



export default class  SignIn extends Component{

    state = {
        signedIn: false,
    };

  
    onSignIn = () => 
    {

        let url = 'http://localhost:3000/signin';

        let htmlEmailElement = document.getElementById('signinEmail');
        let email = htmlEmailElement.value.trim();

        let htmlPasswordElement = document.getElementById('signinPassword');
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
                            <button type="button" class="close" onClick={()=>{this.props.onClose()}} aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form role="form">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="signinEmail" placeholder="Email"/>
                                        <p class="form-text text-muted error-message">Email required</p>
                                        <p class="form-text text-muted error-message">Invalid Email</p>                                    
                                    <input type="password" className="form-control" id="signinPassword" placeholder="Password" />
                                        <p class="form-text text-muted error-message">Password required</p>
                                        <p class="form-text text-muted error-message">Password Incorrect</p>
                                        <button className="btn btn-primary btn-block">Sign In</button>                                   
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
