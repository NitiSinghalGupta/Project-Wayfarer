import React, { Component }from 'react';
import {Switch, Route} from 'react-router-dom';
import  HomePage from '../View/HomePage';
import  Landing from '../View/Landing';


export default class Routes extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={ Landing } />
                <Route exact path="/home" component={ HomePage } />
            </Switch>
        )
    }


}
