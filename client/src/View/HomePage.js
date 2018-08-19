import React,{Component} from 'react';
import CitiesContainer from '../container/CitiesContainer';
import CityDetails from '../container/CityDetails';

export default class HomePage extends Component {
    render(){
        return(
            <div className="container homepageContainer">
               <CitiesContainer />
               <CityDetails /> 
            </div>
        )
    }
}