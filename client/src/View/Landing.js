import React,{Component} from 'react';
import Carousel from '../component/Carousel';
import LandingPageText from '../component/LandingPageText';
import Group from '../component/Group';

const images = [
    '/images/img1.jpeg',
    '/images/img2.jpeg',
    '/images/img3.jpeg',
    '/images/img4.jpeg'
]

export default class Landing extends Component {

    render() {
        return <Group>
                <Carousel images={ images } />
                <LandingPageText />
            </Group>;
    }
}
