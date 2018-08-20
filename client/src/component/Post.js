import React, {Component} from 'react';

export default class Post extends Component {

    state = {
        
    }

    handleChangeDropDown = (e) => {
        console.log(e.target.value)
         this.setState({
          query: e.target.value
        })
        
      }



    render(){
        return(
            <div className='row'>
             <div class='col-md-9'>
                <form>  
                <div className="form-group">    
                <div className="dropdown">
                    <label>
                    Create a New Post                                                                    
                    <select className="dropdown dropdown-menu" value={this.state.value} onChange={this.handleChangeDropDown}>
                        <option className="dropdown-item" value="Cat">Cat</option>
                        <option value="Dog">Dog</option>
                        <option value="Rat">Rat</option>
                        <option value="Dinosaurs">Dinosaurs</option>
                    </select>            
                    </label>
                </div>  
                </div>  
                <div className="form-group">
                    <h5 className="card-title">Post Title</h5> 
                </div>            
                <div className="form-group">      
                    <label for="exampleFormControlTextarea1">Post Text</label>   
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>                     
                </form>      
             </div>
            </div> 
        )
    }
}