import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (
        <div>
            <div className={`card lg:card-side bg-accent shadow-xl text-white ${bgClass}`}>
                <figure className='pl-6'><img src={img} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;