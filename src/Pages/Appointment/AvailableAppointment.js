import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import DentalService from './DentalService';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p className='text-xl text-primary text-center bold'>Available Appointments on {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <DentalService
                        key={service._id} service={service}
                        setTreatment={setTreatment}
                    ></DentalService>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;