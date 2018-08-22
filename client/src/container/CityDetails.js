import React,{Component} from 'react';
import PostContainer from '../container/PostContainer';
import Group from './../component/Group';

export default class CityDetails extends Component {
    
    render() {
        return <Group>
            <div className='row city-details-section'>
                <div className='col-md-3'>
                    <h1>{ this.props.city.name }</h1>
                    <br />
                    <h6>{ this.props.city.country }</h6>
                </div>
                <div className='col-md-9'>
                    <img className="city-detail-image" src={ this.props.city.img } /> 
                </div>
            </div>

            <div className="row post-section">
                <div className='col'>
                    <h1>Posts</h1>
                </div>
                <div className='col'>
                    <a href='#' onClick={ () => this.props.onModalChange('createPost')}>
                        <i className="fas fa-plus-circle" ></i>
                    </a>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <PostContainer city={ this.props.city } user={ this.props.user } 
                                   onPostEdit={ (post) => this.props.onPostEdit(post) } />
                </div>
            </div>
        </Group>;
    }
}