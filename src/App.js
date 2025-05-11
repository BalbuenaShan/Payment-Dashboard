import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaymentForm from './PaymentForm';
import InformationForm from './InformationForm';
import PaymentSuccess from './PaymentSuccess'; // Import the new component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PaymentForm />} />
                <Route path="/information" element={<InformationForm />} />
                <Route path="/payment-success" element={<PaymentSuccess />} /> {/* New route */}
            </Routes>
        </Router>
    );
};

export default App;