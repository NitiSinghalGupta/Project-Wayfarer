import React, {Component} from 'react';
import Group from './Group';
import IfClause from './IfClause';
import axios from 'axios';

export default class Post extends Component {

    editPostClickHandler = () => {
        this.props.onPostEdit(this.props.post);
    }

    deleteClickHandler = () => {
        let confirmed = window.confirm('Do you really want to delete this post?');
        if(confirmed) {
            let url = 'http://localhost:3000/post/' + this.props.post['_id'] + '?email=' + this.props.user.email;
            axios.delete(url)
                .then((data) => {
                    console.log('deleted post data: ', data);
                    this.props.onPostDeleted();
                });
        }
    }

    render() {
        return <Group>
            <div class="media post-card">
                <img class="mr-3 post-image" src="https://s3.amazonaws.com/cdn.roosterteeth.com/default/tb/user_profile_female.jpg" />
                <div class="media-body">
                    <h5 class="mt-0">{ this.props.post.title }</h5>
                    { this.props.post.email }
                    <br />
                    <IfClause condition={ this.props.user.email == this.props.post.email }>
                        <a href='#' onClick={ () => this.editPostClickHandler() }>Edit</a>
                            &nbsp;|&nbsp;
                            <a href='#' onClick={ () => this.deleteClickHandler() } >Delete</a>
                    </IfClause>
                </div>
            </div>
            {/* 
                <div className='col  offset-md-4 postbuttons'>
                </div>
            </div> */}
        </Group>;
    }
}