import React from 'react';

const InfoCard = ({ img }) => {
    return (
        <div>
            <div class="card lg:card-side bg-accent shadow-xl text-white">
                <figure><img src={img} /></figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;