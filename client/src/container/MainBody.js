import React,{Component} from 'react';
import Landing from '../View/Landing';
import HomePage from '../View/HomePage';

export default class MainBody extends Component {
    render(){
        return(
            <div>
                <p>this is my main page</p>
            <Landing />    
            <HomePage />    
            </div>
        )
    }
}