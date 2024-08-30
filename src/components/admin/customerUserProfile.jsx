import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import customerData from '../../assets/customers';

const CustomerUserProfile = () => {
    const { username } = useParams();
    const navigate = useNavigate();
    const customer = customerData.find(c => c.username === username);

    if (!customer) {
        return <p>Customer not found!</p>;
    }

    const handleBackClick = () => {
        navigate('/admin/adminPanel/customerDatabase');
    };

    return (
        <div>
            <h1>Customer Profile: {customer.username}</h1>
            <p>Password: {customer.password}</p>
            <h2>Reservations:</h2>
            <ul>
                {customer.myReservations ? customer.myReservations.map((reservation, index) => (
                    <li key={index}>
                        Date: {reservation.date}, Time: {reservation.time}, Location: {reservation.location}, Guests: {reservation.guests}
                    </li>
                )) : <p>No reservations found.</p>}
            </ul>
            <button onClick={handleBackClick}>Back to Customer Database</button>
        </div>
    );
};

export default CustomerUserProfile;
