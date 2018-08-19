import React,{Component} from 'react';
import Landing from '../View/Landing';
import HomePage from '../View/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default class MainBody extends Component {
    render(){
        return(
            <main>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={ Landing } />
                        <Route path="/home" component={ HomePage } />
                    </Switch>
                </BrowserRouter>
            </main>
        )
    }
}
