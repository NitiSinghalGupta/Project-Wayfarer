import React, { Component } from 'react';



export default class  SigninSignup extends Component{
        render (){

            state = {
                searchResults:[],
            }
        
            currentSearchTerm = '';
        
            onSearch = () => {
                let htmlSearchElement = document.getElementById('searchText');
                let query = htmlSearchElement.value;
        
                if(this.currentSearchTerm === query) {
                    console.log('search term is same as previous one');
                    return;
                }
        
                console.log('Search fired', query);
                let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=NG0PQRv8oUbhvYse8FcK8yCYASyeljDk`;
        
                this.currentSearchTerm = query;
        
                fetch (url)
                    .then((res) => {
                        // converts raw HTTP text response to json object
                        console.log('res is: ', res);
                        return res.json();
                    }).then((data) => {
                        // the json object is available to me here as 'data'
                        // read the results from 'data' and populate the card holder object
                        this.setState( { searchResults : data.data } );
                        console.log('json data:', data);
                    }).catch((err) => {
                        // something failed
                        console.log('Error retured API:', err);
                    });
            }
        
        

        return(
                    <div className="modal" id='signinModal' tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign In <a href="#" onClick={()=>{this.props.onClose()}}>close</a></h5>
                            </div>
                            <div className="modal-body">
                                <form role="form">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email"/>
                                            <input type="password" className="form-control" placeholder="Password" />
                                            
                                                <button className="btn btn-primary btn-block">Sign In</button>
                                           

                                        </div>
                                </form>
                            </div>
                            <div className="modal-header">
                                <h5 className="modal-title">Sign Up</h5>

                            </div>
                            <div className="modal-body">
                                <form role="form">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email"/>
                                            <input type="password" className="form-control" placeholder="Password" />
                                            <button className="btn btn-primary btn-block" onClick={this.onSearch}>Sign Up</button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                   
                    </div>
        )
    }
}


