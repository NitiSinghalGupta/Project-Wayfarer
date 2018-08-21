import React,{Component} from 'react';
import axios from 'axios';
import IfClause from './../component/IfClause';


export default class CreatePost extends Component {

    state = {
        titleRequired: false,
        textRequired: false,
    };

    handleCreateNewPost = () => {

        let title = document.getElementById('postTitle').value;
        let text = document.getElementById('postText').value;

        // let's hide all error message from previous time
        this.setState( {
            titleRequired: false,
            textRequired: false,
        })

        // check for errors again
        if(title.length === 0) {
            this.setState({ titleRequired : true });
            return;
        }

        if(text.length === 0) {
            this.setState({ textRequired : true });
            return;
        }

        let e = document.getElementById('cityDropDown');
        let location = e.options[e.selectedIndex].text;

        let emailApp = this.props.profile;

        console.log('email setting from App.js: ', emailApp);

        axios.post('http://localhost:3000/post', {
            email: this.props.user.email,
            city: location,
            title: title,
            text: text
        }).then((response) => {     
            console.log('email sent is: ', response.email);
            console.log('json data:', response.data);
            
            alert('post added');
            this.props.onClose();
        }).catch((e) => {
            console.log('error creating post', e);
        });
    }

    getCityDropDownValues() {
        let result = [];

        for(let index = 0; index < this.props.cities.length; index++) {
            let item = this.props.cities[index];
            result.push(<option value={ item.name }>{ item.name }</option>)
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
                            <button type="button" className="close" data-dismiss="modal" onClick={ () => this.props.onClose() } >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">  
                            <form role="form">

                                <div className="form-group">
                                    <label for="cityDropDown">Location</label>
                                    <select className="form-control" id="cityDropDown">
                                        { this.getCityDropDownValues() }
                                    </select>
                                </div>
                                
                                <div className="form-group">
                                    <h5 className="card-title">Post Title</h5> 
                                    <input type="text" className="form-control" id="postTitle" placeholder="Post Title here.. " maxlength="200"/>
                                    <IfClause condition={ this.state.titleRequired }>
                                        <p className="form-text text-muted error-message">Post Title is required</p>
                                    </IfClause>
                                </div>            
                                
                                <div className="form-group">      
                                    <label for="exampleFormControlTextarea1">Post Text</label>   
                                    <textarea className="form-control" id="postText" rows="3"></textarea>
                                    <IfClause condition={ this.state.textRequired }>
                                        <p className="form-text text-muted error-message">Text is required</p>
                                    </IfClause>
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