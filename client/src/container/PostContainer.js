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
        let results = [];

        for(let index = 0; index < this.state.posts.length; index++) {
            let item = this.state.posts[index];
            results.push(<Post key={ item['_id'] } post={ item } />);
        }

        return results;
    }

    render(){
        return(
            <div className="post-container">
                { this.getPosts() }
            </div>
        )
    }
}