import React from 'react';
import {Switch, Route} from 'react-router-dom';
import  HomePage from '../View/HomePage';


export default (
    <Switch>
        <Route path='/Home' component={HomePage}/>
        {/* <Route exact path='/Home' component={HomePage}/> */}
        {/* <Route path='/todos' component={  }/> */}
    </Switch>  

)
