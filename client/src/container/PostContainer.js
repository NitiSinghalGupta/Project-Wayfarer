import React,{Component} from 'react';
import Post from '../component/Post';
import axios from 'axios';

export default class PostContainer extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        // this is the time when a city has been chosen
        // on home page load, without user clicking anything
        this.refreshCityPosts(this.props.city.name);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.city.name != nextProps.city.name) {
            this.refreshCityPosts(nextProps.city.name);
        }

        return true;
    }

    refreshCityPosts = (cityName) => {
        console.log('loading posts for city: ' + cityName);

        axios.get('http://localhost:3000/posts/' + cityName)
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
            results.push(<Post key={ item['_id'] } post={ item } 
                               user={ this.props.user } 
                               onPostDeleted={ () => this.refreshCityPosts(this.props.city.name) } 
                               onPostEdit={ (post) => this.props.onPostEdit(post) } />);
        }

        return results;
    }

    render(){
        return (
            <div className="post-container">
                { this.getPosts() }
            </div>
        )
    }
}