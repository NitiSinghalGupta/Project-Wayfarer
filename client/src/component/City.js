import React,{Component} from 'react';

export default class City extends Component {
    render() {
        return(
            <div className="row postcard">
                <div class="col">
                    <img className="img-thumbnail city-image" src="https://az760333.vo.msecnd.net/-/media/corporate/footer-section/shutterstock_210836533.jpg?la=en&ts=6e058b19-5741-4545-a575-5d4016a04962" /> 
                </div>
                <div class="col">
                    <p>{ this.props.city.name }</p>
                </div>
            </div>
        )
    }
}
