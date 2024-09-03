import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/admin');
    };

    const handleCustomerData = () => {
        navigate('/admin/adminPanel/customerDataBase');
    };

    const handleRestaurantData = () => {
        navigate('/admin/adminPanel/restaurantDataBase');
    }

    return (
        <>
            <section id="title">
                <h1>Table Time</h1>
            </section>

            <section id="Welcome">
                <h1>Welcome to Table Time Management Panel</h1>
            </section>

            <section id="RestaurantDataBase">
                <button onClick={handleRestaurantData} className="Restaurant-Data-Base">
                    Restaurant Database
                </button>
            </section>

            <section id="CustomerDataBase">
                <button onClick={handleCustomerData} className="Customer-Data-Base">
                    Customer Database
                </button>
            </section>

            <section id="backButton">
                <button onClick={handleBackClick} className="back-button">
                    Sign Out
                </button>
            </section>
        </>
    );
}

export default AdminPanel;
