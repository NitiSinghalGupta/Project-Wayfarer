import React,{Component} from 'react';


export default class Profile extends Component {
    render(){
        return(
          
            <div class="container">
                <div class="row">
                    <div class="col-xs-4 col-xs-offset-4">

                        <img class="img-responsive picture" src="http://www.kusalimika.ch/file/2017/02/avaar.jpg" />
                        <div>
                            <h5 class="text-bold"></h5>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-4 col-xs-offset-4 text-left">
                        <div class=" col-xs-6 titleP">First Name:</div>
                        <div class=" col-xs-6 "><input type="text" className="form-control" id="" placeholder="Enter first name"/></div>
                        <div class="clearfix"></div>
                        <div class="bot-border"></div>

                        <div class="col-xs-6 titleP ">Last Name:</div>
                        <div class="col-xs-6"> <input type="text" className="form-control" id="" placeholder="Enter last name"/></div>
                        <div class="clearfix"></div>
                        <div class="bot-border"></div>

                        <div class="col-xs-6 titleP ">Date of Joining:</div>
                        <div class="col-xs-6"> <input type="text" className="form-control" id="" placeholder="Enter DoJ"/></div>
                        <div class="clearfix"></div>
                        <div class="bot-border"></div>

                        <div class="col-xs-6 titleP ">Location:</div>
                        <div class="col-xs-6"><input type="text" className="form-control" id="" placeholder="Enter your location "/></div>
                        <div class="clearfix"></div>                      
                        <div class="bot-border"></div>

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