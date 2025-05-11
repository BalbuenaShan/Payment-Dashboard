import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './InformationForm.css'; // CSS for styling

const InformationForm = () => {
    const navigate = useNavigate(); // Initialize navigate for navigation
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle information submission logic here
        console.log('Information submitted');
        // Navigate to the Payment Success page after submission
        navigate('/payment-success');
    };

    return (
        <div className="information-form">
            <img src="/images/carmate.png" alt="Company Logo" className="logo" />
            <h1>Your Information</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            type="text" 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            type="text" 
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                            required 
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input 
                            type="tel" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            required 
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Contact Number</label>
                        <input 
                            type="text" 
                            value={contactNumber} 
                            onChange={(e) => setContactNumber(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input 
                            type="text" 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)} 
                            required 
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Country</label>
                        <input 
                            type="text" 
                            value={country} 
                            onChange={(e) => setCountry(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>ZIP Code</label>
                        <input 
                            type="text" 
                            value={zipCode} 
                            onChange={(e) => setZipCode(e.target.value)} 
                            required 
                        />
                    </div>
                </div>
                <div className="button-group">
                    <button type="button" onClick={() => navigate(-1)}>Back</button> {/* Back button */}
                    <button type="submit">Done</button>
                </div>
            </form>
        </div>
    );
};

export default InformationForm;