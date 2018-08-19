import React,{Component} from 'react';
import PostContainer from '../container/PostContainer';
import Group from './../component/Group';

export default class CityDetails extends Component {
    
    render() {
        return <Group>
            <div className='row'>
                <div className='col-md-3'>
                    <h1>{ this.props.city.name }</h1>
                    <br />
                    <h6>{ this.props.city.country }</h6>
                </div>
                <div className='col-md-9'>
                    <img className="city-detail-image" src="https://az760333.vo.msecnd.net/-/media/corporate/footer-section/shutterstock_210836533.jpg?la=en&ts=6e058b19-5741-4545-a575-5d4016a04962" /> 
                </div>
            </div>

            <div className='row'>
                <PostContainer />
            </div>
        </Group>;
    }
}