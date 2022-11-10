import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;