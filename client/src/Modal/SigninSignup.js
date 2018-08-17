import React, { Component } from 'react';



export default class  SigninSignup extends Component{
    onSignUp = () => {
        let htmlEmailElement = document.getElementById('signupEmail');
        let email = htmlEmailElement.value;

        let htmlPasswordElement = document.getElementById('signupPassword');
        let password = htmlPasswordElement.value;

        if(this.email !== '') {
            console.log('email is blank');
            return;
        }

        if(this.password !== '') {
            console.log('password is blank');
            return;
        }


        let url = `http://localhost:3000/signup`;

        fetch (url)
            .then((res) => {
                // converts raw HTTP text response to json object
                console.log('res is: ', res);
                return res.json();
            }).then((data) => {
                // the json object is available to me here as 'data'
                this.setState( { userProfile : data } );
                console.log('json data:', data);
            }).catch((err) => {
                // throw error
                console.log('Error retured API:', err);
            });
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


