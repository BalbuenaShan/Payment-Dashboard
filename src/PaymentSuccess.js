import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentSuccess.css'; // CSS for styling

const PaymentSuccess = () => {
    const navigate = useNavigate();

    const handleHomeRedirect = () => {
        navigate('/'); // Navigate to home page or any other page
    };

    return (
        <div className="payment-success">
            <h1>Thank You!</h1>
            <div className="success-icon">
                <img src="/images/credit-card.png" alt="Success" />
            </div>
            <p>Payment done successfully</p>
            <p>You will be redirected to the home page shortly or click here to return to the home page.</p>
            <button onClick={handleHomeRedirect}>Home</button>
        </div>
    );
};

export default PaymentSuccess;