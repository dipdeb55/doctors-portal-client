import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Service from './Service';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <MakeAppointment />
            <Testimonials />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;