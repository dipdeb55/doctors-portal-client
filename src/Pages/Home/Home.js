import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Service from './Service';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-14'>
            <Banner />
            <Info />
            <Services />
            <MakeAppointment />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;