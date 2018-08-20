import React,{Component} from 'react';
import CitiesContainer from '../container/CitiesContainer';
import CityDetails from '../container/CityDetails';

export default class HomePage extends Component {

    state = {
        currentCity : null
    }

    setCurrentCity = (city) => {
        this.setState( { currentCity : city} );
    }
    
    render() {
        return <div className="container-fluid">
            <div className='row'>
                <div className='col-md-3'>
                    <CitiesContainer cities={ this.props.cities } onCityChange={ (city) => this.setCurrentCity(city) } />
                </div>
                <div className='col-md-9'>
                    <CityDetails city={ this.state.currentCity ? this.state.currentCity : this.props.cities[0] } onModalChange={ (name) => this.props.onModalChange(name) } /> 
                </div>
            </div>
        </div>;
    }

}
