import React, {Component} from 'react';
import Group from './Group';
import IfClause from './IfClause';

export default class Post extends Component {

    render() {
        return <Group>
            <div className='row'>
                <div className='col-md-10'>
                    <div>{ this.props.post.title }</div>
                    <div>written by { this.props.post.email }</div>
                </div>
                <div className='col-md-2'>
                    <IfClause condition={ this.props.user.email == this.props.post.email }>
                        <a href='#'>Edit</a> | <a href='#'>Delete</a>
                    </IfClause>
                </div>
            </div>
        </Group>;
    }
}