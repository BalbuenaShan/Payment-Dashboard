import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './PaymentForm.css'; // CSS file for styling

const PaymentForm = () => {
    const navigate = useNavigate(); // Initialize navigate for navigation
    const [cardNumber, setCardNumber] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvvCode, setCvvCode] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle payment submission logic here
        console.log('Payment submitted');
        navigate('/information'); // Navigate to the InformationForm
    };

    return (
        <div className="payment-form">
            <h1>Payment Details</h1>
            <form onSubmit={handleSubmit}>
                <div className="card-logos">
                    <img src="/images/paypal.png" alt="PayPal" />
                    <img src="/images/card.png" alt="MasterCard" />
                    <img src="/images/visa.png" alt="Visa" />
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Card Number</label>
                        <input 
                            type="text" 
                            value={cardNumber} 
                            onChange={(e) => setCardNumber(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Name on Card</label>
                        <input 
                            type="text" 
                            value={nameOnCard} 
                            onChange={(e) => setNameOnCard(e.target.value)} 
                            required 
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Expiry Date</label>
                        <input 
                            type="text" 
                            placeholder="MM/DD/YY" 
                            value={expiryDate} 
                            onChange={(e) => setExpiryDate(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>CVV Code</label>
                        <input 
                            type="text" 
                            value={cvvCode} 
                            onChange={(e) => setCvvCode(e.target.value)} 
                            required 
                        />
                    </div>
                </div>
                <div className="terms-group">
                    <input 
                        type="checkbox" 
                        checked={termsAccepted} 
                        onChange={() => setTermsAccepted(!termsAccepted)} 
                        required 
                    />
                    <label>I Agree to the Terms & Conditions</label>
                </div>
                <button type="submit" className="paymentbutton" disabled={!termsAccepted}>
                Continue
                </button>
            </form>
        </div>
    );
};

export default PaymentForm;