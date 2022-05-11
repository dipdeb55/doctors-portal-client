import React from 'react';

const InfoCard = ({ img, cardTitle, bgColor }) => {
    return (
        <div>
            <div className={`card lg:card-side bg-accent shadow-xl text-white ${bgColor}`}>
                <figure className='pl-6 pt-5'><img src={img} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;