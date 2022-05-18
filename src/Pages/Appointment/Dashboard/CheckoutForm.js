import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }
    const stripe = useStripe();
    const elements = useElements()

    if (!stripe || !elements) {
        return
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
        return
    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className='btn btn-sm btn-success mt-3' disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;