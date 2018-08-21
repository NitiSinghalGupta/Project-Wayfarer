import React from 'react';
import axios from 'axios';
import Post from '../component/Post';

export default class UserPosts extends React.Component {

    state = {
        posts : []
    }

    componentWillMount() {
        axios.get('http://localhost:3000/posts?email=' + this.props.user.email)
            .then((response) => {
                this.setState({ posts : response.data });
            }).catch((e) => {
                console.log('error fetching posts', e);
            });
    }

    getPosts = () => {
        if(this.state.posts.length <= 0) {
            return <div className='alert alert-primary'>
                No posts for this city.
            </div>
        }
        let results = [];

        for(let index = 0; index < this.state.posts.length; index++) {
            let item = this.state.posts[index];
            results.push(<Post key={ item['_id'] } post={ item } />);
        }

        return results;
    }

    render() {
        return (
            <div className="container post-container">
                { this.getPosts() }
            </div>
        )
    }

}
