import React,{Component} from 'react';

export default class CreatePost extends Component {

    handleCreateNewPost = () => {
        let form = document.getElementById('createPostModal');


    }

    getCityDropDownValues() {
        let result = [];

        for(let index = 0; index < this.props.cities.length; index++) {
            let item = this.props.cities[index];
            result.push(<option>{ item.name }</option>)
        }

        return result;
    }

    render() {
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

                    <div class="form-group">
                        <label for="cityDropDown">Location</label>
                        <select class="form-control" id="cityDropDown">
                            { this.getCityDropDownValues() }
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <h5 className="card-title">Post Title</h5> 
                        <input type="text" className="form-control" id="signinEmail" placeholder="Post Title here.."/>
                    </div>            
                    
                    <div className="form-group">      
                        <label for="exampleFormControlTextarea1">Post Text</label>   
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <br/>
                    </div>
                    
                    <a href='#' className="btn btn-primary btn-block" onClick={ () => this.handleCreateNewPost() }>Submit</a>
                </form>      
             </div>
             </div>
            </div> 
            </div>
        )
    }
}