import React,{Component} from 'react';

export default class City extends Component {
    
    render() {
        return <div className="media city-card">
            <img className="mr-3 img-thumbnail" onClick={ () => this.props.onClick(this.props.city) } src={this.props.city.img} />
            <div className="media-body">
                <h5 className="mt-0">
                    <a href='#' onClick={ () => this.props.onClick(this.props.city) } >{ this.props.city.name }</a>
                </h5>
            </div>
        </div>;
    }
}
