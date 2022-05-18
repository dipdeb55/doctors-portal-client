import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0s35Kat86I70hsRaTWQjWFXFaRAwhu2S57llsEqnP54f2iafdrWBkBvHubxTH38cxi9DyR8MMbmyjWvaj70FLP00bvdXPEpq');


const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`

    const { data, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    console.log(data)

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, </p>
                    <h2 class="card-title">Please Pay for {data?.treatment}</h2>
                    <p>Your appointment: <span className='text-orange-700'>{data?.date}</span> at {data?.slot}</p>
                    <p>Please pay: ${data?.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;