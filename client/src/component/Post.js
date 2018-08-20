import React, {Component} from 'react';
import Group from './Group';
import IfClause from './IfClause';

export default class Post extends Component {

    render() {
        return <Group>
            <div className='row'>
                <div className='col'>
                    <div>{ this.props.post.title }</div>
                    <div>written by { this.props.post.email }</div>
                </div>
            </div>
        </Group>;
    }
}