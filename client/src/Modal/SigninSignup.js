import React, { Component } from 'react';
import axios from 'axios';


export default class  SigninSignup extends Component{

    state = {
        signedUp: false
    }

    onSignUp = () => {

        let htmlEmailElement = document.getElementById('signupEmail');
        let email = htmlEmailElement.value.trim();

        

        let htmlPasswordElement = document.getElementById('signupPassword');
        let password = htmlPasswordElement.value.trim();

        console.log('email is :' , email);
        console.log('pwd is :' , password);

        // if(email !== '') {
        //     console.log('email is blank');
        //     return;
        // }

        // if(password !== '') {
        //     console.log('password is blank');
        //     return;
        // }


        let url = 'http://localhost:3000/signup';

        axios.post(url)
            .then(res => console.log('Signup Response = ', res))
        // fetch('http://localhost:3000/signup')
        //     .then((response) => {
        //         return response.json();
        //     }).then((data) => {
             
        //         // this.setState( { signedUp: true  } );
        //         console.log('json data:', data);

        //     }).catch((err) => {
               
        //         console.log('Error retured API:', err);
        //     });
    }
            render (){

        return(
                    <div className="modal" id='signinModal' tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign In <a href="#" onClick={()=>{this.props.onClose()}}>close</a></h5>
                            </div>
                            <div className="modal-body">
                                <form role="form">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email"/>
                                            <input type="password" className="form-control" placeholder="Password" />
                                            
                                                <button className="btn btn-primary btn-block">Sign In</button>
                                           

                                        </div>
                                </form>
                            </div>
                            <div className="modal-header">
                                <h5 className="modal-title">Sign Up</h5>

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


