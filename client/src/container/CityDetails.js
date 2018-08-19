import React,{Component} from 'react';
import PostContainer from '../container/PostContainer';

export default class CityDetails extends Component {
    render(){
        return(
            <div className="container">
            <div className="cityname">
                <h1>London</h1>
                <h2>United Kingdom</h2>
                <img  src="" alt="Card image cap" />
            </div>
                <PostContainer />
            </div>
        )
    }
}