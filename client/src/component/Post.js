import React, {Component} from 'react';

export default class Post extends Component {
    render(){
        return(
            <div className="card" >
            <div className="postlayout">
                <div className="card-body postimg">
                    <img className="card-img-top" src="https://az760333.vo.msecnd.net/-/media/corporate/footer-section/shutterstock_210836533.jpg?la=en&ts=6e058b19-5741-4545-a575-5d4016a04962" alt="Card image cap" /> 
                </div>
                <div className="postbody">
                    <h5 className="card-title">Post Title</h5>                  
                    <p className="card-text">this is will be my post text</p>
                </div>    
            </div>    
            </div>
        )
    }
}