import React,{Component} from 'react';
import CitiesContainer from '../container/CitiesContainer';
import CityDetails from '../container/CityDetails';

export default class HomePage extends Component {
    render() {
        return <div className="container-fluid">
                <div className='row'>
                    <div className='col-md-3'>
                       <CitiesContainer cities={ this.props.cities } />
                    </div>
                    <div className='col-md-9'>
                        <CityDetails city={ this.props.cities[0] } onModalChange={ (name) => this.props.onModalChange(name) } /> 
                    </div>
                </div>
            </div>;
    }
}