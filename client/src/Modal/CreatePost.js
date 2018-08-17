import React,{Component} from 'react';

export default class CreatePost extends Component {
    render(){
        return(
            <div className="modal" id='signinModal' tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create New Post</h5>
                        </div>
                        <div className="modal-body">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}