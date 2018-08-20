import React,{Component} from 'react';
import axios from 'axios';
import Group from '../component/Group';

export default class Profile extends Component {

    state = {


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
            // this.setState( { signedIn: true  } );
            this.props.onProfileChange(data);
            console.log('json data:', data);
            console.log(this);
            
        }).catch((err) => {              
            console.log('Error retured API Profile:', err);
        });
            

        } 


    render(){
        return(
            <div class='container'>
                <div class="alert alert-primary" role="alert">
                    User profile saved succesfully.
                </div>
                
                <div className="row">
                    <div className='col'>
                        <form>
                            <div class="form-group">
                                <label for="userFirstName">First Name</label>
                                <input type="text" class="form-control" id="userFirstName" placeholder="First Name" />
                            </div>
                            <div class="form-group">
                                <label for="userLastName">Last Name</label>
                                <input type="text" class="form-control" id="userLastName" placeholder="Last Name" />
                            </div>
                            <div class="form-group">
                                <label for="userJoiningDate">Joining Date</label>
                                <input type="text" class="form-control" id="userJoiningDate" value={ this.props.user ? this.props.user.joinDate : '' } disabled='disabled'/>
                            </div>
                            <div class="form-group">
                                <label for="userLocation">Location</label>
                                <input type="text" class="form-control" id="userLocation" />
                            </div>

                            <a href='#' className="btn btn-primary" onClick={ () => this.onSaveClick()}>Update</a>
                        </form>
                    </div>
                    <div className='col'>
                        <img className="img-thumbnail picture" id="ProfileImage" src="http://www.kusalimika.ch/file/2017/02/avaar.jpg" />
                        <h5 className="text-bold">Upload a different photo...</h5>
                        <input type="file" class="text-center center-block file-upload" />
                    </div>
                </div>
            </div>
        )
    }
}