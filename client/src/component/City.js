import React,{Component} from 'react';

export default class City extends Component {
    
    render() {
        return(
            <div className="row postcard">
                <div className="col">
                    <img className="img-thumbnail city-image" onClick={ () => this.props.onClick(this.props.city) } src={this.props.city.img} /> 
                </div>
                <div className="col">
                    <a href='#' onClick={ () => this.props.onClick(this.props.city) } >
                        { this.props.city.name }
                    </a>
                </div>
            </div>
        )
    }
}
