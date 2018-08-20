import React,{Component} from 'react';

export default class CreatePost extends Component {
    render(){
        return(
            <div className="modal" id='createPostModal' tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Create a New Post</h5>
                                <button type="button" className="close" data-dismiss="modal" onClick={ () => this.props.onClose() } aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                </div>
                <div className="modal-body">  
                <form role="form">          
                <div className="form-group">    
                <div class="dropdown show">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
                </div>
                </div>  
                <div className="form-group">
                    <h5 className="card-title">Post Title</h5> 
                    <input type="text" className="form-control" id="signinEmail" placeholder="Post Title here.."/>
                </div>            
                <div className="form-group">      
                    <label for="exampleFormControlTextarea1">Post Text</label>   
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <br/>
                <div className="form-group">    
                    <a href='#' className="btn btn-primary btn-block" onClick={ () => this.onSubmit() }>Submit</a>
                </div>    
                </div>                     
                </form>      
             </div>
             </div>
            </div> 
            </div>
        )
    }
}