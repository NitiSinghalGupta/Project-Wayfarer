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
            <div className='row'>
                <div className='col-md-10'>
                    <div>{ this.props.post.title }</div>
                    <div>written by { this.props.post.email }</div>
                </div>
                <div className='col-md-2'>
                    <IfClause condition={ this.props.user.email == this.props.post.email }>
                        <a href='#' onClick={ () => this.editPostClickHandler() }>Edit</a> | <a href='#' onClick={ () => this.deleteClickHandler() } >Delete</a>
                    </IfClause>
                </div>
            </div>
        </Group>;
    }
}