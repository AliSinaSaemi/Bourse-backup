import React, { Component } from 'react';
import Accordions from '../../components/DetailComponent/Accordions';
import PageTitle from '../../components/DetailComponent/pageTitle';
import CountDown from '../../components/DetailComponent/countDown';
import Carousel from '../../components/DetailComponent/carousel';

class Contact extends Component {
    render() {
        return (
            <div>
                <PageTitle />
                <Accordions />
                <CountDown />
                <Carousel />
                
            </div>
        );
    }
}

export default Contact;
