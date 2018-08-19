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
                        <div class=" col-xs-6 tital">First Name:</div>
                        <div class=" col-xs-6 ">Marko</div>
                        <div class="clearfix"></div>
                        <div class="bot-border"></div>

                        <div class="col-xs-6 tital ">Last Name:</div>
                        <div class="col-xs-6"> Markovic</div>
                        <div class="clearfix"></div>
                        <div class="bot-border"></div>

                        <div class="col-xs-6 tital ">Age:</div>
                        <div class="col-xs-6"> 25</div>
                        <div class="clearfix"></div>
                        <div class="bot-border"></div>

                        <div class="col-xs-6 tital ">Place Of Birth:</div>
                        <div class="col-xs-6">Doboj</div>
                        <div class="clearfix"></div>
                        <div class="bot-border"></div>
                    </div>
                </div>    
            </div>


        )
    }
}