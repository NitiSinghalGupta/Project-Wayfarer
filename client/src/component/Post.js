import React, {Component} from 'react';

export default class Post extends Component {
    render(){
        return(
            <div className="card">
                <div className="card-body">
                     <img className="card-img-top" src=".../100px200/" alt=""/>  
                    <h5 className="card-title">Post Title</h5>                  
                    <p className="card-text">this is will be my post text</p>
                </div>
            </div>
        )
    }
}