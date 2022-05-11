import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';


const DentalService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p className=''>
                    {
                        slots.length
                            ? <span>{slots[0]}</span>
                            : <span className='text-orange-500'>We are booked today!</span>
                    }
                </p>
                <p className=''> {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">
                    <label for="booking-modal" disabled={slots.length === 0} onClick={() => setTreatment(service)} class="btn btn-secondary text-white uppercase bold">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default DentalService;