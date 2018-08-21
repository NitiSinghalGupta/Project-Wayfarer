import React,{Component} from 'react';
import axios from 'axios';

export default class EditPost extends Component {

    handlePostUpdate() {
        let title = document.getElementById('postTitle').value;
        let text = document.getElementById('postText').value;

        axios.post('http://localhost:3000/post/' + this.props.post['_id'], {
            email: this.props.user.email,
            title: title,
            text: text
        }).then((response) => {     
            console.log('email sent is: ', response.email);
            console.log('json data:', response.data);
            
            alert('post updated');
            this.props.onClose();
        }).catch((e) => {
            console.log('error creating post', e);
        });
    }

    render() {
        return(
            <div className="modal" id='createPostModal' tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Post</h5>
                            <button type="button" className="close" data-dismiss="modal" onClick={ () => this.props.onClose() } >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">  
                            <form role="form">

                                <div className="form-group">
                                    <label for="postCity">Location</label>
                                    <input type="text" className="form-control" id="postCity" defaultValue={ this.props.post.city } readOnly />
                                </div>
                                
                                <div className="form-group">
                                    <h5 className="card-title">Post Title</h5> 
                                    <input type="text" className="form-control" id="postTitle" defaultValue={ this.props.post.title } />
                                </div>            
                                
                                <div className="form-group">      
                                    <label for="exampleFormControlTextarea1">Post Text</label>   
                                    <textarea className="form-control" id="postText" rows="3">{ this.props.post.text }</textarea>
                                    <br/>
                                </div>
                                
                                <a href='#' className="btn btn-primary btn-block" onClick={ () => this.handlePostUpdate() }>Update</a>
                            </form>      
                        </div>
                    </div>
                </div> 
            </div>
        )
    }

}
