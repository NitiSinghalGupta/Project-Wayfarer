import React,{Component} from 'react';
import City from '../component/City';


const cities = [{name:"london",country:"United Kingdom",img:""},
                {name:"Delhi",country:"India",img:""},    
                {name:"San Jose",country:"United States of America",img:""}, 
                {name:"Rome",country:"Italy",img:""}, 
                {name:"Ontario",country:"Canada",img:""}
]

export default class CityContainer extends Component {

    

    render(){
        return(
            <div>
                <City/>
            </div>
        )
    }
}