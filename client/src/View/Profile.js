import React,{Component} from 'react';
import axios from 'axios';
import Group from '../component/Group';
import IfClause from '../component/IfClause';

export default class Profile extends Component {

    state = {
        updateSuccess : false
    }

    onSaveClick = () => 
    {

        let url = 'http://localhost:3000/profile';

        let htmlFnameElement = document.getElementById('userFirstName');
        let firstname = htmlFnameElement.value.trim();

        let htmlLnameElement = document.getElementById('userLastName');
        let lastname = htmlLnameElement.value.trim();
        
        let htmlLocationElement = document.getElementById('userLocation');
        let location = htmlLocationElement.value.trim();

        let email = this.props.user.email;

        //bonus feature will take up later if get time
        // let htmlEmailElement = document.getElementById('ProfileImage');
        // let image = htmlEmailElement.value;        

        // let's hide all error message from previous time
        // this.setState( {
 
        // })

        // // check for errors again
        // if(email.length === 0) {
        //     this.setState({ emailRequired : true });
        //     return;
        // }

        // if(!this.checkEmailAddress(email)) {
        //     this.setState({ emailInvalid : true });
        //     return;
        // }

        axios.post(url, {
            email: email,
            firstname: firstname,
            lastname: lastname,
            location: location,
            // image:image,
        }).then((data) => {            
            console.log('json data:', data);
            console.log(this);
            
            this.setState({ updateSuccess : true});
        }).catch((err) => {              
            console.log('Error retured API Profile:', err);
        });
            

        } 


    render(){
        return(
            <div className='container'>
                <IfClause condition={ this.state.updateSuccess }>
                    <div className="alert alert-primary" role="alert">
                        User profile saved succesfully.
                    </div>
                </IfClause>

                <h2>Profile Settings</h2>
                <br />
                
                <div className="row">
                    <div className='col-md-8'>
                        <form>
                            <div className="form-group">
                                <label for="userEmail">User Email</label>
                                <input type="text" className="form-control" id="userEmail" value={ this.props.user ? this.props.user.email : '' } readOnly/>
                            </div>
                            <div className="form-group">
                                <label for="userFirstName">First Name</label>
                                <input type="text" className="form-control" id="userFirstName" defaultValue={ this.props.user ? this.props.user.firstname : '' }  placeholder="First Name" />
                            </div>
                            <div className="form-group">
                                <label for="userLastName">Last Name</label>
                                <input type="text" className="form-control" id="userLastName" defaultValue={ this.props.user ? this.props.user.lastname : '' } placeholder="Last Name" />
                            </div>
                            <div className="form-group">
                                <label for="userJoiningDate">Joining Date</label>
                                <input type="text" className="form-control" id="userJoiningDate" value={ this.props.user ? this.props.user.joinDate : '' } readOnly/>
                            </div>
                            <div className="form-group">
                                <label for="userLocation">Location</label>
                                <input type="text" className="form-control" id="userLocation" defaultValue={ this.props.user ? this.props.user.location : '' } />
                            </div>

                            <a href='#' className="btn btn-primary" onClick={ () => this.onSaveClick()}>Update</a>
                        </form>
                    </div>
                    <div className='col-md-4 avatar-section'>
                        <img className="img-thumbnail picture" id="ProfileImage" src="http://www.kusalimika.ch/file/2017/02/avaar.jpg" />
                        <h5 className="text-bold">Change Avatar</h5>
                        <input type="file" className="text-center center-block file-upload" />
                    </div>
                </div>
            </div>
        )
    }
}