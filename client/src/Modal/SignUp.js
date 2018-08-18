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
                            <h5 className="modal-title">Sign Up <a href="#" onClick={()=>{this.props.onClose()}}>close</a> </h5>

                        </div>
                        <div className="modal-body">
                            <form role="form">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="signupEmail" placeholder="Email"/>
                                    <input type="password" className="form-control" id="signupPassword" placeholder="Password" />
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
