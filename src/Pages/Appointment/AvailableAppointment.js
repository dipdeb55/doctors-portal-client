import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import DentalService from './DentalService';

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)
    const formatedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`https://lit-citadel-66481.herokuapp.com/available?date=${formatedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`https://lit-citadel-66481.herokuapp.com/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formatedDate])
    return (
        <div>
            <p className='text-3xl text-primary text-center bold my-8'>Available Appointments on {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <DentalService
                        key={service._id} service={service}
                        setTreatment={setTreatment}
                        refetch={refetch}
                    ></DentalService>)
                }
            </div>
            {treatment && <BookingModal date={date} refetch={refetch} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;