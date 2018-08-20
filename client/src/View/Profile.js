import React,{Component} from 'react';
import axios from 'axios';

export default class Profile extends Component {

    state = {


    }

    onSaveClick = () => 
    {

        let url = 'http://localhost:3000/profile';

        let htmlFnameElement = document.getElementById('ProfileFirstName');
        let firstname = htmlFnameElement.value.trim();

        let htmlLnameElement = document.getElementById('ProfileLastName');
        let lastname = htmlLnameElement.value.trim();
        
        let htmlLocationElement = document.getElementById('ProfileLocation');
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
          
            <div className="container">
                <div className="row">
                    <div className="col-xs-4 col-xs-offset-4">

                        <img className="img-thumbnail picture" id="ProfileImage" src="http://www.kusalimika.ch/file/2017/02/avaar.jpg" />
                        <div>
                            <h5 className="text-bold">Upload a different photo...</h5>
                        </div>
                        <input type="file" class="text-center center-block file-upload" />
                    </div>
                </div>
                <div className="row">
                    <div class="alert alert-primary" role="alert">
                        User Profile Saved Succesfully!!!
                    </div>
                    <div className="col-xs-4 col-xs-offset-4 text-left">
                        <div className=" col-xs-6 titleP">First Name:</div>
                        <div className=" col-xs-6 "><input type="text" className="form-control" id="ProfileFirstName" placeholder="Enter first name"/></div>
                        <div className="clearfix"></div>
                        <div className="bot-border"></div>

                        <div className="col-xs-6 titleP ">Last Name:</div>
                        <div className="col-xs-6"> <input type="text" className="form-control" id="ProfileLastName" placeholder="Enter last name"/></div>
                        <div className="clearfix"></div>
                        <div className="bot-border"></div>

                        <div className="col-xs-6 titleP ">Date of Joining:</div>
                        <div className="col-xs-6"> <input type="text" className="form-control"  placeholder="Enter DoJ"/></div>
                        <div className="clearfix"></div>
                        <div className="bot-border"></div>

                        <div className="col-xs-6 titleP ">Location:</div>
                        <div className="col-xs-6"><input type="text" className="form-control" id="ProfileLocation" placeholder="Enter your location "/></div>
                        <div className="clearfix"></div>                      
                        <div className="bot-border"></div>

                        <div class="col-xs-6 titleP "></div>
                        <div class="col-xs-6"></div>
                        <div class="clearfix"></div>
                        <a href='#' className="btn btn-primary btn-block" onClick={ () => this.onSaveClick()}>Save</a>
                        <div class="bot-border"></div>
                    </div>
                </div>    
            </div>


        )
    }
}