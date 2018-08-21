import React, { Component }from 'react';
import {Switch, Route} from 'react-router-dom';
import  HomePage from '../View/HomePage';
import  Landing from '../View/Landing';
import  Profile from '../View/Profile';
import { withRouter } from 'react-router-dom';
import UserPosts from '../View/UserPosts';

class Routes extends Component{

    render() {
        return <Switch>
                <Route exact path="/" component={ Landing } />
                    
                <Route exact path="/home" render={ () => {
                    if(!this.props.user) {
                        this.props.history.push('/');
                        return null;
                    }                   
                    return <HomePage onModalChange={ (name) => this.props.onModalChange(name) } cities={ this.props.cities } />
                } } />

                <Route exact path="/posts" render={ () => {
                    if(!this.props.user) {
                        this.props.history.push('/');
                        return null;
                    }

                    return <UserPosts user={this.props.user} />
                } } />
                    
                <Route exact path="/profile" render={() => {
                    if(!this.props.user) {
                        this.props.history.push('/');
                        return null;
                    }

                    return <Profile user={this.props.user} />;
                }} />
            </Switch>
    }

}

const MyRoutes = withRouter(Routes);

export default MyRoutes;
