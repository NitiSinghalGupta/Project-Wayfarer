import React, { Component }from 'react';
import {Switch, Route} from 'react-router-dom';
import  HomePage from '../View/HomePage';
import  Landing from '../View/Landing';


export default class Routes extends Component{

    getHomePage() {
        return <HomePage onModalChange={ (name) => this.props.onModalChange(name) } />
    }
    
    render(){
        return(
            <Switch>
                <Route exact path="/" component={ Landing } />
                <Route exact path="/home" render={ this.getHomePage } />
            </Switch>
        )
    }


}
