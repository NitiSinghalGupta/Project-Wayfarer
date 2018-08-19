import React,{Component} from 'react';
import CitiesContainer from '../container/CitiesContainer';
import CityDetails from '../container/CityDetails';

const cities = [{name:"london",country:"United Kingdom",img:""},
                {name:"Delhi",country:"India",img:""},    
                {name:"San Jose",country:"United States of America",img:""}, 
                {name:"Rome",country:"Italy",img:""}, 
                {name:"Ontario",country:"Canada",img:""}
]

export default class HomePage extends Component {
    render() {
        return <div className="container-fluid">
                <div className='row'>
                    <div className='col-md-3'>
                       <CitiesContainer cities={ cities } />
                    </div>
                    <div className='col-md-9'>
                        <CityDetails city={ cities[0] } /> 
                    </div>
                </div>
            </div>;
    }
}