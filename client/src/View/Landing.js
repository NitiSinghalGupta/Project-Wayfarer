import React,{Component} from 'react';
import Carousel from '../component/Carousel';
import LandingPageText from '../component/LandingPageText';

export default class Landing extends Component {
    render(){
        return(
            <div>
                <Carousel />
                <LandingPageText />
                <LandingPageText />
                <LandingPageText />
            </div>
        )
    }
}