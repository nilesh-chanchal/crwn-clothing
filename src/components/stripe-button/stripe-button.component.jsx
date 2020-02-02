import React from 'react';
import StripCheckout from 'react-stripe-checkout';

const StripCheckoutButton = ({ price }) => {
   
    const publishableKey  = 'pk_test_HruKBjvnvqCDBNYTF8djJUvb00BwdDk8zs';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripCheckout 

        label = 'Pay Now'
        name = 'CRWN Cloting Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is ₹${price}`}
        amount={price}
        panelLabel='Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        />
    )
}

export default StripCheckoutButton;