import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';


const DentalService = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-secondary text-xl font bold">{name}</h2>
                <p className=''>
                    {
                        slots.length
                            ? <span>{slots[0]}</span>
                            : <span className='text-orange-500'>We are booked today!</span>
                    }
                </p>
                <p className=''> {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small> ${price}</small></p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" disabled={slots.length === 0} onClick={() => setTreatment(service)} className="btn btn-sm btn-secondary text-white uppercase bold">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default DentalService;