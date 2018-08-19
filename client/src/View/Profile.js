import React,{Component} from 'react';


export default class Profile extends Component {
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
                        <a href='#' className="btn btn-primary btn-block" >Save</a>
                        <div class="bot-border"></div>

                    </div>
                </div>    
            </div>


        )
    }
}