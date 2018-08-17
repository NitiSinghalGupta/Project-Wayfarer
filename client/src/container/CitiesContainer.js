import React,{Component} from 'react';
import City from '../component/City';

export default class CityContainer extends Component {
    render(){
        return(
            <div>
                <h3>Inside a citycontainer comp</h3>
                <City/>
            </div>
        )
    }
}