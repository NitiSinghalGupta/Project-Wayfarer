import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class  SigninSignup extends Component{
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
                                            <input type="email" className="form-control" placeholder="Email"/>
                                            <input type="password" className="form-control" placeholder="Password" />
                                            <button className="btn btn-primary btn-block">Sign Up</button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                   
                    </div>
        )
    }
}


