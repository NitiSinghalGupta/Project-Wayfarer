import React, { Component } from 'react'


export default class SigninSignup extends Component{
    render(){
        return(
            <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Sign In</h5>
                    </div>
                    <div class="modal-body">
                        <form role="form">
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Email"/>
                                    <input type="password" class="form-control" placeholder="Password" />
                                    <button class="btn btn-primary btn-block">Sign In</button>
                                </div>
                        </form>
                    </div>
                    <div class="modal-header">
                        <h5 class="modal-title">Sign Up</h5>

                    </div>
                    <div class="modal-body">
                        <form role="form">
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Email"/>
                                    <input type="password" class="form-control" placeholder="Password" />
                                    <button class="btn btn-primary btn-block">Sign Up</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}