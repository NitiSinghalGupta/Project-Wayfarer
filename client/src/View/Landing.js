import React,{Component} from 'react';
import Carousel from '../component/Carousel';
import LandingPageText from '../component/LandingPageText';
import Group from '../component/Group';

const images = [
    '/images/car1.jpg',
    '/images/japan.jpg',
    '/images/car.jpg',
    '/images/birds-gg.jpg',
    '/images/sfo.jpg'
    // '/images/img4.jpeg'
]

export default class Landing extends Component {

    render() {
        return <Group>
                <Carousel images={ images } />
                <LandingPageText />
            </Group>;
    }
}
