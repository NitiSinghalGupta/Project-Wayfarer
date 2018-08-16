import React,{Component} from 'react';
import Landing from '../View/Landing';
import HomePage from '../View/HomePage';

export default class MainBody extends Component {
    render(){
        return(
            <div>
            <Landing />    
            <HomePage />    
            </div>
        )
    }
}