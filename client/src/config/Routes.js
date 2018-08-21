import React, { Component }from 'react';
import {Switch, Route} from 'react-router-dom';
import  HomePage from '../View/HomePage';
import  Landing from '../View/Landing';
import  Profile from '../View/Profile';
import IfClause from '../component/IfClause';

export default class Routes extends Component{

    render() {
        return <Switch>
                <Route exact path="/" component={ Landing } />
                    
                <Route exact path="/home" render={ () => {
                    return <HomePage onModalChange={ (name) => this.props.onModalChange(name) } cities={ this.props.cities } />
                } } />
                    
                <Route exact path="/profile" render={() => {
                    return <Profile user={this.props.user} />
                }} />
            </Switch>
    }

}
