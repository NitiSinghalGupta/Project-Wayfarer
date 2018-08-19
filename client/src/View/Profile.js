import React,{Component} from 'react';


export default class Profile extends Component {

    state = {

    }

    onSignIn = () => 
    {

        let url = 'http://localhost:3000/signin';

        let htmlEmailElement = document.getElementById('signinEmail');
        let email = htmlEmailElement.value.trim();

        // let's hide all error message from previous time
        this.setState( {
            emailRequired : false,
            emailInvalid : false,
            pwdRequired : false,
            pwdInvalid : false,
        })

        // check for errors again
        if(email.length === 0) {
            this.setState({ emailRequired : true });
            return;
        }

        if(!this.checkEmailAddress(email)) {
            this.setState({ emailInvalid : true });
            return;
        }


        let htmlPasswordElement = document.getElementById('signinPassword');
        let password = htmlPasswordElement.value.trim();

        if(password.length === 0) {
            this.setState({ pwdRequired : true });
            return;
        }

        console.log('email is :' , email);
        console.log('pwd is :' , password);

        axios.post('http://localhost:3000/signin', {
            email: email,
            password: password
        }).then((data) => {            
            // this.setState( { signedIn: true  } );
            this.props.onProfileChange(data);
            console.log('json data:', data);
            console.log(this);

            // let's go to the home screen
            this.props.history.push('/home');
            this.props.onClose();
            
        }).catch((err) => {              
            console.log('Error retured API SignIn:', err);
        });
            

        } 


    render(){
        return(
          
            <div className="container">
                <div className="row">
                    <div className="col-xs-4 col-xs-offset-4">

                        <img className="img-thumbnail picture" src="http://www.kusalimika.ch/file/2017/02/avaar.jpg" />
                        <div>
                            <h5 className="text-bold">Upload a different photo...</h5>
                        </div>
                        <input type="file" class="text-center center-block file-upload" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-xs-offset-4 text-left">
                        <div className=" col-xs-6 titleP">First Name:</div>
                        <div className=" col-xs-6 "><input type="text" className="form-control" id="" placeholder="Enter first name"/></div>
                        <div className="clearfix"></div>
                        <div className="bot-border"></div>

                        <div className="col-xs-6 titleP ">Last Name:</div>
                        <div className="col-xs-6"> <input type="text" className="form-control" id="" placeholder="Enter last name"/></div>
                        <div className="clearfix"></div>
                        <div className="bot-border"></div>

                        <div className="col-xs-6 titleP ">Date of Joining:</div>
                        <div className="col-xs-6"> <input type="text" className="form-control" id="" placeholder="Enter DoJ"/></div>
                        <div className="clearfix"></div>
                        <div className="bot-border"></div>

                        <div className="col-xs-6 titleP ">Location:</div>
                        <div className="col-xs-6"><input type="text" className="form-control" id="" placeholder="Enter your location "/></div>
                        <div className="clearfix"></div>                      
                        <div className="bot-border"></div>

                        <div class="col-xs-6 titleP "></div>
                        <div class="col-xs-6"></div>
                        <div class="clearfix"></div>
                        <a href='#' className="btn btn-primary btn-block" onClick={ () => this.onSaveClick()>Save</a>
                        <div class="bot-border"></div>

                    </div>
                </div>    
            </div>


        )
    }
}