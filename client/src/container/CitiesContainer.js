import React,{Component} from 'react';
import City from '../component/City';

export default class CityContainer extends Component {

    getCities() {
        let result = [];

        this.props.cities.forEach((element) => {
            result.push(<City city={ element } onClick={ (city) => this.props.onCityChange(city) } />);
        });

        return result;
    }

    render(){
        return this.getCities();
    }
}
