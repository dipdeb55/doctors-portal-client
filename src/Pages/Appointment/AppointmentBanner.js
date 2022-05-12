import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import bg from '../../assets/images/bg.png'

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className=''
            style={{
                background: `url(${bg})`,
                backgroundSize: "cover"
            }} >
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='Chair from doctor' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                        <p>Your Selected Date:</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AppointmentBanner;